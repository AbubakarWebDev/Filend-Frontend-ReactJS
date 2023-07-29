import { useState, useRef, useEffect } from "react";

import Peer from "simple-peer";
import streamSaver from "streamsaver";
import { ClipLoader } from "react-spinners";
import { BiSolidError } from "react-icons/bi";

import FileProgress from '../FileProgress';

import { webRTCSocket as socket } from "../../socket";

const worker = new Worker("/worker.js");

const ReceiverFileContainer = ({ roomID }) => {
  const peerRef = useRef(null);
  const fileSize = useRef(null);
  const fileName = useRef(null);
  const totalReceivedBytes = useRef(0);

  const [gotFile, setGotFile] = useState(false);
  const [completeFile, setCompleteFile] = useState(false);
  const [connectionEstablished, setConnection] = useState(false);
  const [invalidConnection, setInvalidConnection] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);

  function downloadFile() {
    worker.postMessage("download");

    worker.addEventListener("message", (event) => {
      const stream = event.data.stream();

      const fileStream = streamSaver.createWriteStream(fileName.current);

      stream.pipeTo(fileStream);
    });
  }

  function handleReceivingData(data) {
    if (data.toString().includes("webRTCFileDone")) {
      console.log(data);
      setCompleteFile(true);
      downloadFile();
    }
    else {
      totalReceivedBytes.current += data.length;

      setProgressPercentage((totalReceivedBytes.current / fileSize.current) * 100);

      worker.postMessage(data);
    }
  }

  function addPeer(incomingSignal, callerID) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
    });

    peer.on("signal", (signal) => {
      socket.emit("sending_sdp_answer", {
        signal,
        userToSignal: callerID,
        callerID: socket.id
      });
    });

    peer.on("data", handleReceivingData);

    peer.signal(incomingSignal);

    return peer;
  }

  useEffect(() => {
    socket.emit("join_room", { roomID, init: false });

    function onReceiving_SDP_offer(payload) {
      peerRef.current = addPeer(payload.signal, payload.callerID);

      peerRef.current.on('connect', () => {
        setConnection(true);
      });

      peerRef.current.on('close', () => {
        setConnection(false);
      });

      peerRef.current.on('error', (err) => {
        if (err.code === 'ERR_CONNECTION_FAILURE') {
          setConnection(false);
        }

        console.log(err);
      });
    }

    function onReceiving_file_MetaData(payload) {
      fileName.current = payload.metaData.fileName;
      fileSize.current = payload.metaData.fileSize;

      socket.emit("successfully_store_file_MetaData", {
        userToSignal: payload.callerID,
        callerID: socket.id
      });

      setGotFile(true);
    }

    socket.on("receive_sdp_offer", onReceiving_SDP_offer);
    socket.on("receive_file_MetaData", onReceiving_file_MetaData);

    setTimeout(function () {
      setInvalidConnection(true);
    }, 10 * 1000);

    return () => {
      peerRef.current?.destroy();
      socket.off("receive_sdp_offer", onReceiving_SDP_offer);
      socket.off("receive_file_MetaData", onReceiving_file_MetaData);
    }
  }, []);


  //   Sender has stopped sharing
  // The sender has either closed this transfer or is now offline. Please check if the sender has an active internet connection or ask for a new link.

  return (
    <div className="p-5 lg:w-2/5 min-h-[320px] flex text-center items-center justify-center rounded-md bg-white shadow-md">
      {(connectionEstablished && gotFile) ? (
        <FileProgress percentage={progressPercentage.toFixed()} />
      ) : (invalidConnection && !connectionEstablished) ? (
        <div className="flex text-center items-center justify-center flex-col">
          <BiSolidError className="mb-2" size={60} />
          <h3 className="mb-2 text-2xl font-bold"> Sender has stopped sharing </h3>
          <p className="mb-2 text-xl font-medium">The sender has either closed this transfer or is now offline. Please check if the sender has an active internet connection or ask for a new link. </p>
        </div>
      ) : (
        <div className="flex text-center items-center justify-center flex-col">
          <ClipLoader className="mb-2" size={60} />
          <h3 className="mb-2 text-2xl font-bold"> Connecting to sender </h3>
          <p className="mb-2 text-xl font-medium"> Trying to establish a connection with the sender </p>
        </div>
      )}
    </div >
  );
};

export default ReceiverFileContainer;

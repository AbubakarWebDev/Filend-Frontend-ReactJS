import { useState, useRef, useEffect } from "react";

import Peer from "simple-peer";
import streamSaver from "streamsaver";
import { ClipLoader } from "react-spinners";

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
    if ((data.length === 23) && data.toString().includes("webRTCFileDone")) {
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

    return () => {
      peerRef.current?.destroy();
      socket.off("receive_sdp_offer", onReceiving_SDP_offer);
      socket.off("receive_file_MetaData", onReceiving_file_MetaData);
    }
  }, []);

  return (
    <>
      {(connectionEstablished && gotFile) ? (
        <FileProgress percentage={progressPercentage.toFixed()} />
      ) : <ClipLoader />}
    </>
  );
};

export default ReceiverFileContainer;

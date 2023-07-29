import { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';

import Peer from "simple-peer";
import { v1 as uuid } from "uuid";

import ShareFile from "../ShareFile";
import UploadFile from "../UploadFile";
import FileProgress from './../FileProgress';

import { webRTCSocket as socket } from "../../socket";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss"

const SenderFileContainer = () => {
  const peerRef = useRef();
  const [file, setFile] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isLinkGenerated, setIsLinkGenerated] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState({});

  function sendFile(file, callerID) {
    // Get the reference to the peer object
    const peer = peerRef.current;

    // Keep track of the current byte position in the file
    let totalSentBytes = 0;

    // Set the chunk size to 10KB (adjust as needed)
    const chunkSize = 10 * 1024;

    // getting the size of the file
    const totalFileSize = file.size;

    socket.emit('sending_file_MetaData', {
      userToSignal: callerID,
      callerID: socket.id,
      metaData: {
        fileSize: totalFileSize,
        fileName: file.name
      }
    });

    function readNextChunk() {
      // Calculate the ending byte for the current chunk
      const endingByte = Math.min(totalSentBytes + chunkSize, totalFileSize);

      // Slice the file to get the current chunk
      const fileChunk = file.slice(totalSentBytes, endingByte);

      // Create a readable stream from the current chunk
      const stream = fileChunk.stream();

      // Get the reader to read from the stream
      const reader = stream.getReader();

      // Read the chunk from the stream
      reader.read().then((obj) => {
        // Send the chunk data to the peer using the simple-peer library
        peer.write(obj.value);

        // Calculate and update the progress percentage
        setProgressPercentage((prev) => {
          return {
            ...prev,
            [peer.channelName]: (totalSentBytes / totalFileSize) * 100
          };
        });

        // If there is more data to send, move to the next chunk
        if (totalSentBytes < totalFileSize) {
          totalSentBytes = endingByte;
          readNextChunk();
        }
        else {
          // If the last chunk has been sent, send the "done" message
          peer.write(JSON.stringify({ webRTCFileDone: true }));
          return;
        }
      });
    }

    socket.on("peer_successfully_store_file_MetaData", () => {
      // Start reading and sending the file in chunks
      readNextChunk();
    })
  }

  function createPeer(userToSignal, callerID) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
    });

    peer.on("signal", (signal) => {
      socket.emit("sending_sdp_offer", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function generateLink(file) {
    if (!file) {
      alert("Please Select a file First!");
      return;
    }

    const roomID = uuid();

    socket.emit("join_room", { roomID, init: true });
    setIsLinkGenerated(`${import.meta.env.VITE_BASE_URL}/room/${roomID}`);

    socket.on("peer_connected", (peer) => {
      peerRef.current = createPeer(peer, socket.id);
    });

    function onReceiving_SDP_Answer(payload) {
      console.log("Receiving SDP", payload);

      peerRef.current.signal(payload.signal);

      peerRef.current.on('connect', () => {
        console.log('Connected to peer!');

        setProgressPercentage((prev) => {
          return {
            ...prev,
            [peerRef.current.channelName]: 0
          };
        });

        sendFile(file, payload.callerID);
      });

      peerRef.current.on('close', () => {
        console.log('Disconnected to peer!');
      });

      peerRef.current.on('error', (err) => {
        if (err.code === 'ERR_CONNECTION_FAILURE') {
          console.log('Disconnected to peer!');
        }
      });
    }

    socket.on("receive_sdp_answer", onReceiving_SDP_Answer);
  }

  const handleCopyToClipboard = (input) => {
    if (file) {
      input.select();
      document.execCommand("copy");

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  function handleUpload(file) {
    setFile(file);
    generateLink(file);
  }

  if (Object.values(progressPercentage).length > 0) {
    return (
      <div className="p-5 lg:w-2/5 min-h-[330px] flex text-center items-center justify-center rounded-md bg-white shadow-md">
        {(Object.values(progressPercentage).length > 1) ? (
          <Carousel showIndicators={true} showThumbs={false} showStatus={false} showArrows={false}>
            {Object.values(progressPercentage).map((percentage, index) => (
              <FileProgress key={index} percentage={percentage.toFixed()} />
            ))}
          </Carousel>
        ) : (
          <FileProgress percentage={Object.values(progressPercentage)[0].toFixed()} />
        )}
      </div>
    );
  }

  return (
    <>
      {(file && isLinkGenerated) ? (
        <ShareFile
          file={file}
          showToast={showToast}
          link={isLinkGenerated}
          handleCopyToClipboard={handleCopyToClipboard}
        />
      ) : (
        <UploadFile
          handleUpload={handleUpload}
        />
      )}
    </>
  );
};

export default SenderFileContainer;

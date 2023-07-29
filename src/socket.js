import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_SERVER_BASE_URL);
const chatSocket = io(`${import.meta.env.VITE_SERVER_BASE_URL}/chat`);
const webRTCSocket = io(`${import.meta.env.VITE_SERVER_BASE_URL}/webRTC`);

function emit(socket, event, arg) {
    socket.timeout(2000).emit(event, arg, (err) => {
        if (err) {
            // no ack from the server, let's retry
            emit(socket, event, arg);
        }
    });
}

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});

export {
    emit,
    chatSocket,
    webRTCSocket
};

export default socket;
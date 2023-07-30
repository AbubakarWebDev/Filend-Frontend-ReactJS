import { useEffect, useState } from 'react';
import { chatSocket as socket, emit } from "../socket";

const useOnlineStatus = (user) => {
    const [onlineUsers, setOnlineUsers] = useState({});

    useEffect(() => {
        if (user) {
            emit(socket, "setup", user._id);
        }

        const getOnlineUsers = (users) => {
            setOnlineUsers(users);
        }

        socket.on("onlineUsers", getOnlineUsers);

        return () => {
            socket.off("onlineUsers", getOnlineUsers);
        }
    }, [user]);

    return onlineUsers;
};

export default useOnlineStatus;
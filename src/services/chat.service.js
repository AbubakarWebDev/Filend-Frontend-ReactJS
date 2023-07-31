import Api from "./api.service";
import { convertToMultipartFormData } from "../utils";

const getAllChats = (signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.get("/chats", options);
};

const getorCreateChats = (payload, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.post("/chats", payload, options);
}

const createGroupChat = (payload, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.post("/chats/group", payload, options);
}

const updateGroupUsers = (payload, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.put("/chats/group/users", payload, options);
}

const updateGroupAdmins = (payload, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.put("/chats/group/admins", payload, options);
}

const renameGroupName = (payload, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.put("/chats/group/rename", payload, options);
}

const removeUserFromGroup = (payload, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.put("/chats/group/remove-member", payload, options);
}

const updateGroupIcon = (payload, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    const formData = convertToMultipartFormData(payload);

    return Api.put("/chats/group/icon", formData, options);
}

export {
    getAllChats,
    renameGroupName,
    updateGroupIcon,
    createGroupChat,
    getorCreateChats,
    updateGroupUsers,
    updateGroupAdmins,
    removeUserFromGroup,
};
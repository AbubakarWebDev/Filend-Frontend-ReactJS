import Api from "./api.service";

const currentUser = (signal) => {
    const token = localStorage.getItem("token");

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.get("/users/loggedin", options);
};

const userExist = (id, signal) => {
    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        signal: controller.signal
    };

    return Api.get(`/users/${id}`, options);
};

const getAllUsers = (search, signal) => {
    const token = localStorage.getItem('token');

    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        signal: controller.signal
    };

    return Api.get(`/users?search=${search}`, options);
}

export {
    currentUser,
    userExist,
    getAllUsers
};
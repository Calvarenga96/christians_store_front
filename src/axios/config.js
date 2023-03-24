import axios from "axios";

const baseURL =
    import.meta.env.VITE_DEV_MODE === "dev"
        ? "http://localhost:8000/api/v1"
        : "https://christiansstoreback-production.up.railway.app/api/v1";

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});

function beforeRequest(config) {
    return config;
}

function requestError(error) {
    return Promise.reject(error);
}

instance.interceptors.request.use(beforeRequest, requestError);

export default instance;

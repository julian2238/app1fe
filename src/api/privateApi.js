import useAuthStore from "../store/store";
import axiosInstance from "./axiosInstance";

const privateApi = axiosInstance;

privateApi.interceptors.request.use(
    async (config) => {
        const token = useAuthStore.getState().getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

export default privateApi;
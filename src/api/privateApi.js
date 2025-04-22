import useAuthStore from "../store/store";
import axiosInstance from "./axiosInstance";
import { handleAxiosError } from "../../utils/utils";

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

privateApi.interceptors.response.use(
    res => res,
    err => {
        handleAxiosError(err);
        return Promise.reject(err);
    }
);

export default privateApi;
import { handleAxiosError } from "../utils/utils";
import axiosInstance from "./axiosInstance";

const publicApi = axiosInstance;

publicApi.interceptors.response.use(
    res => res,
    err => {
        handleAxiosError(err);
        return Promise.reject(err);
    }
);

export default publicApi; 
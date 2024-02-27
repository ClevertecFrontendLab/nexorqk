import axios from 'axios';
import { BASE_API_URL } from '@constants/api';
import { getLocalStorageToken, removeLocalStorageToken } from '@shared/utils/local-storage';

export const request = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: BASE_API_URL,
});

request.interceptors.request.use(
    (config) => {
        const accessToken = getLocalStorageToken();

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

request.interceptors.response.use(
    (res) => res,
    async (err) => {
        if (err.response) {
            if (err.response.status === 401) {
                removeLocalStorageToken();

                return Promise.reject(err);
            }
            if (err.response.status === 403 && err.response.data) {
                return Promise.reject(err.response.data);
            }
        }
        return Promise.reject(err);
    },
);

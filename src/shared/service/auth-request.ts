import axios from 'axios';
import { BASE_API_URL } from '@constants/api';

export const authRequest = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

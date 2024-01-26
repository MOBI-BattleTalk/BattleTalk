import axios from 'axios';
import cookieStorage from '@/utils/cookieStorage.tsx';
import { ACCESS_TOKEN } from '@/const/Keys.ts';

const token = cookieStorage.getCookie(ACCESS_TOKEN);
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  headers: {
    authorization: token ? `Bearer ${token}` : null,
  },
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
    pair: import.meta.env.VITE_PAIR,
  },
  withCredentials: true,
});

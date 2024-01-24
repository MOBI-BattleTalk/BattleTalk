import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
  withCredentials: true,
});

import axios from 'axios';
import cookieStorage from '@/utils/cookieStorage.tsx';
import CookieStorage from '@/utils/cookieStorage.tsx';
import { ACCESS_TOKEN } from '@/const/Keys.ts';
import { END_POINTS } from '@/const/EndPoint.ts';
import AuthApi from '@/apis/auth.ts';

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
axiosInstance.interceptors.request.use(
  (res) => {
    return res;
  },
  async (err) => {
    //토큰이 유효하지 않을 시에 리프레시 발급 요청
    if (err.response.status === 401) {
      await AuthApi.postRefresh();
      CookieStorage.deleteCookie(ACCESS_TOKEN);
      //토큰이 리프레시 토큰을 재발급 받으면 자동으로 재요청 로직이 실행되는 것일까요?
    }
    const originalRequest = err.config;
    if (err.response.status === 403) {
      window.location.href = END_POINTS.LOGIN;
    }
    //재요청 전송
    return axiosInstance(originalRequest);
  },
);

export const checkAndSetToken = () => {
  const accessToken = cookieStorage.getCookie(ACCESS_TOKEN);
  if (!accessToken) {
    console.log('토큰이 존재하지 않습니다.');
    window.location.href = END_POINTS.HOME;
  }
};

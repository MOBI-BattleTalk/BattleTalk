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

/**
 * 응답 인터셉터
 * 응답을 보내기전 intercept하여 해당 로직을 실행시킵니다.
 *
 * 401 : accessToken이 유효하지 않다는 것으로 리프레시 토큰을 발급받아
 *      새로운 토큰으로 재요청을 보냅니다.
 * 403 : accessToken, refreshToken이 모두 유효하지 않을 때
 *      다시 로그인을 하도록 로그인 페이지로 direct, 로그아웃 api 요청
 */
let isRefreshing = false;

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    //토큰이 유효하지 않을 시에 리프레시 발급 요청
    const originalRequest = err.config;

    if (err.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;

        //리프레시 요청을 보내고 성공시 재요청, 실패시 로그아웃
        try {
          const token = await AuthApi.postRefresh();
          CookieStorage.setCookie(ACCESS_TOKEN, token, 60 * 24);

          //발급 받은 토큰으로 요청에 토큰 수정
          originalRequest.headers.common['Authorization'] = `Bearer ${token}`;
          //axiosInstace의 common에도 토큰 수정
          axiosInstance.defaults.headers.common['Authorization'] =
            `Bearer ${token}`;
          return axiosInstance(originalRequest);
          //리프레시 요청이 실패했을 때 로그아웃
        } catch (refreshErr) {
          window.location.href = END_POINTS.LOGIN;
          await AuthApi.postSignOut();
          //리프레시 요청을 true 상태로 바꾸어 한번만 실행되게 함.
        } finally {
          isRefreshing = true;
        }
      }
    }

    if (err.response.status === 403) {
      window.location.href = END_POINTS.LOGIN;
      await AuthApi.postSignOut();
    }

    return Promise.reject(err);
  },
);

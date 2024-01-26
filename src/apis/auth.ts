import {axiosInstance} from '@/apis/core.ts';
import cookieStorage from '@/utils/cookieStorage.tsx';
import {AxiosResponse} from 'axios';
import LocalStorage from '@/utils/localStorage.tsx';
import {SignInType, SignUpType} from '@/types/userType';
import {ACCESS_TOKEN, STORAGE_KEYS} from '@/const/Keys.ts';
import {END_POINTS} from '@/const/EndPoint.ts';

//로그인시 받아오는 데이터 타입
type SignInDataType = {
  userId: string;
  password: string;
  token: string;
  info: {
    nickName: string;
    profileUrl: string;
  };
};

const AuthApi = {
  //로그인
  postSignIn: async (data: SignInType) => {
    try {
      const res: AxiosResponse<SignInDataType, Error> =
        await axiosInstance.post(END_POINTS.USER_SIGN_IN, data);
      //토큰 저장
      cookieStorage.setCookie(ACCESS_TOKEN, res.data.token, 60);
      //유저의 정보 저장
      LocalStorage.setItem(
        STORAGE_KEYS.USER_INFO,
        JSON.stringify({
          userId: res.data.userId,
          nickName: res.data.info.nickName,
          profileUrl: res.data?.info?.profileUrl,
        }),
      );
      if (res.status === 200) {
        return res;
      }
      //리프레시 요청 로직
      if (res.status === 401) {
        await AuthApi.postRefresh();
      }
      if (res.status === 403) {
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  //회원가입
  postSignUp: async (data: SignUpType) => {
    const { userId, password, nickname } = data;
    try {
      const res = await axiosInstance.post(END_POINTS.USER_SIGN_UP, {
        userId: userId,
        password: password,
        data: {
          nickName: nickname,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  //로그아웃
  postSignOut: async () => {
    try {
      const res = await axiosInstance.post(END_POINTS.USER_SIGN_OUT);
      //저장된 토큰 삭제
      cookieStorage.deleteCookie('accessToken');
      //저장된 유저 정보 삭제
      LocalStorage.removeItem('userInfo');
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  //리프레시 토큰 발급
  postRefresh: async () => {
    try {
      const res = await axiosInstance.get(END_POINTS.USER_REFRESH);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
};

export default AuthApi;

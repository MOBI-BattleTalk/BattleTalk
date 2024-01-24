import {axiosInstance} from '@/apis/core.ts';
import cookieStorage from '@/utils/cookieStorage.tsx';
import {AxiosResponse} from 'axios';
import {SignInType, SignUpType} from '@/types';

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
  postSignIn: async (data: SignInType) => {
    try {
      const res: AxiosResponse<SignInDataType, Error> =
        await axiosInstance.post('/user/sign-in', data);
      //토큰 저장
      cookieStorage.setCookie('accessToken', res.data.token, 60);
      //유저의 정보 저장
      sessionStorage.setItem('userId', res.data.userId);
      sessionStorage.setItem('nickName', res.data.info.nickName);
      sessionStorage.setItem('profileUrl', res.data.info.profileUrl);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  postSignUp: async (data: SignUpType) => {
    const { userId, password, nickname } = data;
    try {
      const res = await axiosInstance.post('/user/sign-up', {
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
  postSignOut: async () => {
    try {
      const res = await axiosInstance.post('/user/sign-out');
      //저장된 토큰 삭제
      cookieStorage.deleteCookie('accessToken');
      //저장된 유저 정보 삭제
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('nickName');
      sessionStorage.removeItem('profileUrl');
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default AuthApi;

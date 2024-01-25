import { axiosInstance } from '@/apis/core.ts';
import cookieStorage from '@/utils/cookieStorage.tsx';
import { AxiosResponse } from 'axios';
import LocalStorage from '@/utils/localStorage.tsx';
import { SignInType, SignUpType } from '@/types/userType';

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
      LocalStorage.setItem(
        'userInfo',
        JSON.stringify({
          userId: res.data.userId,
          nickName: res.data.info.nickName,
          profileUrl: res.data?.info?.profileUrl,
        }),
      );
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
      LocalStorage.removeItem('userInfo');
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default AuthApi;

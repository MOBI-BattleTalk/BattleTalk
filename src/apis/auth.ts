import { axiosInstance } from '@/apis/core.ts';
import cookieStorage from '@/utils/cookieStorage.tsx';

type SignInType = {
  userId: string;
  password: string;
};

type SignUpType = {
  userId: string;
  password: string;
  nickname: string;
};

const AuthApi = {
  postSignIn: async (data: SignInType) => {
    try {
      const res = await axiosInstance.post('/user/sign-in', data);
      cookieStorage.setCookie('accessToken', res.data.token, 60);
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
    console.log(data);
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
      const res = await axiosInstance.post('/user/sign-up');
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default AuthApi;

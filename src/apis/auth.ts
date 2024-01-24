import { axiosInstance } from '@/apis/core.ts';
import { SignInType } from '@/types';

type SignUpType = {
  userId: string;
  password: string;
  data: {
    nickname: string;
  };
};

const AuthApi = {
  postSignUp: async (data: SignInType) => {
    try {
      const res = await axiosInstance.post('/user/sign-up', data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  postSignIn: async (data: SignUpType) => {
    try {
      const res = await axiosInstance.post('/user/sign-in', data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  postSignOut: async (data: SignUpType) => {
    try {
      const res = await axiosInstance.post('/user/sign-up', data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default AuthApi;

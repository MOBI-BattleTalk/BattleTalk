import { axiosInstance } from '@/apis/core.ts';

type SignUpType = {
  userId: string;
  password: string;
  data: {
    nickname: string;
  };
};

type SignInType = {
  userId: string;
  password: string;
};
const AuthApi = {
  signUP: async (data: SignUpType) => {
    return await axiosInstance.post('/user/sign-up', data);
  },
  signIn: async (data: SignInType) => {
    return await axiosInstance.post('/user/sign-in', data);
  },
  signOut: async () => {
    return await axiosInstance.post('/user/sign-out');
  },
  postSignUp: async (data: SignUpType) => {
    try {
      const res = await axiosInstance.post('/user/sign-up', data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default AuthApi;

import { axiosInstance } from './core';

// 회원가입 로직
type SignUpType = {
  userId: string;
  password: string;
  data: {
    nickName: string;
  };
};

export const postSignUp = async (userData: SignUpType) => {
  const res = await axiosInstance.post<SignUpType>('/user/sign-up', userData);
  return res;
};

// 로그인 로직
type SignInType = {
  userId: string;
  password: string;
};

export const postSignIn = async (userData: SignInType) => {
  const res = await axiosInstance.post<SignInType>('/user/sign-in', userData);
  return res;
};

// 로그아웃 로직
type SignOutType = {
  userId: string;
};

export const postSignOut = async (userData: SignOutType) => {
  const res = await axiosInstance.post<SignOutType>('/user/sign-out', userData);
  return res;
};

// 토큰 재발급 로직
type RefreshType = {
  userId: string;
};

export const getRefresh = async (userData: RefreshType) => {
  const res = await axiosInstance.get<RefreshType>('/user/refresh', userData);
  return res;
};

type UpdateProfileType = {
  formData: {
    image: File;
  };
};

export const patchUpdateProfile = async (userData: UpdateProfileType) => {
  const res = await axiosInstance.patch<UpdateProfileType>(
    '/user/update/profile',
    userData,
  );
  return res;
};

type UpdateInfoType = {
  nickName: string;
};

export const postUpdateInfo = async (userData: UpdateInfoType) => {
  const res = await axiosInstance.post<UpdateInfoType>(
    '/user/update/info',
    userData,
  );
  return res;
};

type;

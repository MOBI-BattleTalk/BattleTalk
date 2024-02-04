import {axiosInstance} from '@/apis/core.ts';
import cookieStorage from '@/utils/cookieStorage.tsx';
import {AxiosResponse} from 'axios';
import LocalStorage from '@/utils/localStorage.tsx';
import {SignInType, SignUpType} from '@/types/userType';
import {ACCESS_TOKEN, STORAGE_KEYS} from '@/const/Keys.ts';
import {END_POINTS} from '@/const/EndPoint.ts';
import toastMessage, {TOAST_MESSAGE} from '@/utils/toastMessage.tsx';

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
    const res: AxiosResponse<SignInDataType, Error> = await axiosInstance.post(
      END_POINTS.USER_SIGN_IN,
      data,
    );
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
    return res;
  },
  //회원가입
  postSignUp: async (data: SignUpType) => {
    const { userId, password, nickname } = data;
    const res = await axiosInstance.post(END_POINTS.USER_SIGN_UP, {
      userId: userId,
      password: password,
      data: {
        nickName: nickname,
      },
    });
    return res.data;
  },
  //로그아웃
  postSignOut: async () => {
    try {
      const res = await axiosInstance.post(END_POINTS.USER_SIGN_OUT);
      //저장된 토큰 삭제
      cookieStorage.deleteCookie(ACCESS_TOKEN);
      //저장된 유저 정보 삭제
      LocalStorage.removeItem('userInfo');
      toastMessage(true, TOAST_MESSAGE.LOGOUT_SUCCESS);
      return res.data;
    } catch (err) {
      toastMessage(false, TOAST_MESSAGE.LOGOUT_FAILURE);
    }
  },
  //리프레시 토큰 발급
  postRefresh: async () => {
    const res = await axiosInstance.get(END_POINTS.USER_REFRESH);
    return res.data.token;
  },
  //프로필 사진 변경
  patchUpdateProfile: async (data: FormData) => {
    const res = await axiosInstance.post(END_POINTS.UPDATE_PROFILE, data);
    return res.data;
  },
  //닉네임 변경
  patchUserNickName: async (inputValue: string) => {
    const res = await axiosInstance.patch(END_POINTS.UPDATE_INFO, {
      data: {
        nickName: inputValue,
      },
    });
    return res.data;
  },
};

export default AuthApi;

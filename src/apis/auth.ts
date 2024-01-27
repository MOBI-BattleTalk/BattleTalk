import { axiosInstance } from '@/apis/core.ts';
import cookieStorage from '@/utils/cookieStorage.tsx';
import { AxiosResponse } from 'axios';
import LocalStorage from '@/utils/localStorage.tsx';
import { nickNameType, SignInType, SignUpType } from '@/types/userType';
import { ACCESS_TOKEN, STORAGE_KEYS } from '@/const/Keys.ts';
import { END_POINTS } from '@/const/EndPoint.ts';

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
    if (res.status === 200) {
      window.location.href = END_POINTS.HOME;
    }
    //로그인 실패시 다른 로직 실행
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
    const res = await axiosInstance.post(END_POINTS.USER_SIGN_OUT);
    //저장된 토큰 삭제
    cookieStorage.deleteCookie(ACCESS_TOKEN);
    //저장된 유저 정보 삭제
    LocalStorage.removeItem('userInfo');
    return res.data;
  },
  //리프레시 토큰 발급
  postRefresh: async () => {
    const res = await axiosInstance.get(END_POINTS.USER_REFRESH);
    return res.data.token;
  },
  //프로필 사진 변경
  patchUpdateProfile: async (data: FormData) => {
    const res = await axiosInstance.patch(END_POINTS.UPDATE_PROFILE, data);
    return res.data;
  },
  //닉네임 변경
  patchUserNickName: async (data: nickNameType) => {
    const { nickName } = data;
    const res = await axiosInstance.patch(END_POINTS.UPDATE_INFO, {
      nickName,
    });
    return res.data;
  },
};

export default AuthApi;

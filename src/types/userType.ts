export type UserType = {
  id: string;
  pw: string;
  nickName: string;
  imgUrl: File;
};

export type UserInfoType = Omit<UserType, 'id' | 'pw'>;

export type SignUpType = {
  userId: string;
  password: string;
  passwordCheck: string;
  nickname: string;
};

export type SignInType = { userId: string; password: string };
export type FormType = SignUpType | SignInType;

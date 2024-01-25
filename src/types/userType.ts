export type UserType = {
  id: string;
  pw: string;
  nickName: string;
  imgUrl: File;
};

export type UserInfoType = Omit<UserType, 'id' | 'pw'>;

type SignUpType = { id: string; pw: string; nickname: string };
type SignInType = { id: string; pw: string };
export type FormType = SignUpType | SignInType;

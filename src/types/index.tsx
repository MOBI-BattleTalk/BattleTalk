export enum Category {
  'all' = '전체',
  'it' = 'IT',
  'sport' = '스포츠',
  'game' = '게임',
  'enter' = '엔터',
  'life' = '라이프',
  'etc' = '기타',
}

export type UserType = {
  id: string;
  pw: string;
  nickName: string;
  imgUrl: File;
};

export type UserInfoType = Omit<UserType, 'id' | 'pw'>;

//백에서 받아오는 타입
export type PostType = {
  userInfo: UserInfoType; //현재 유저의 정보를 담아서 보냄
  userId: string; //내 유저 id랑 일치하면 삭제 버튼
  id: string; //✅댓글 작성시 parentId로 사용
  createAt: Date; //✅
  title: string;
  content: string;
  imgUrl: [string, string]; //첫번째 사진은 blue, 두번째 사진은 red
  category: Category;
  voteCount: [number, number];
  voteTotalCount: number;
};

//프론트에서 보내는 타입
export type PostPostType = {
  userInfo: UserInfoType; //현재 유저의 정보를 담아서 보냄
  title: string;
  content: string;
  imgUrl: [File, File];
  createAt: Date;
  category: Category;
  voteCount: [number, number]; //생성시 0으로 설정하고 보내기
  voteTotalCount: number; //생성시 0으로 설정하고 보내기
};

export type CommentType = {
  userInfo: UserInfoType;
  content: string;
  parentId: string;
  createdAt: Date;
  option: 1 | 2; //어떤 옵션을 선택했는지
};

export type SignUpType = {
  userId: string;
  password: string;
  nickname: string;
};

export type SignInType = { userId: string; password: string };

export type FormInterType = SignUpType & SignInType;

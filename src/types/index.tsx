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
  imgUrl: string;
};

export type PostType = {
  userInfo: UserType;
  id: number;
  title: string;
  content: string;
  imgUrl: [string, string];
  createAt: Date;
  category: Category;
  voteCount: [number, number];
  isMine: boolean;
};

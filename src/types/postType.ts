export enum Category {
  'all' = '전체',
  'it' = 'IT',
  'sport' = '스포츠',
  'game' = '게임',
  'enter' = '엔터',
  'life' = '라이프',
  'etc' = '기타',
}

// 백엔드에서 받는 post 타입
export type GetBattleInfoType = {
  data: {
    nickName: string;
    profileUrl: string;
    userId: string;
    title: string;
    content: string;
    blueOptionTitle: string;
    redOptionTitle: string;
    category: Category;
    blueVoteCount: string;
    redVoteCount: string;
    voteTotalCount: string;
  };
  id: string;
  createdAt: string;
  dataImage: { url: string }[];
  dataUser: null;
};

//프론트에서 보내는 post 타입
export type PostBattleInfoType = {
  nickName: string;
  profileImg: string;
  userId: string;
  title: string;
  content: string;
  blueOptionTitle: string;
  redOptionTitle: string;
  images: [File, File];
  category: Category;
  blueVoteCount: string;
  redVoteCount: string;
  voteTotalCount: string;
};

export type PostCommentType = {
  nickName: string;
  profileUrl: string;
  userId: string;
  content: string;
  parentId: string;
  option: 1 | 2; //어떤 옵션을 선택했는지
};

export type GetCommentType = {
  nickName: string;
  profileUrl: string;
  userId: string;
  content: string;
  parentId: string;
  createdAt: Date;
  option: 1 | 2; //어떤 옵션을 선택했는지
};

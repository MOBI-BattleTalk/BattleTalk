import { Category, GetBattleInfoType } from '@/types/postType.ts';

export const BattleMock: GetBattleInfoType = {
  data: {
    nickName: '하니좋아하니',
    profileUrl: '',
    userId: '12',
    title: '4세대 걸그룹에서 당신의 선택은??',
    content: '아이브 대 뉴진스 당신의 선택은?',
    blueOptionTitle: '아이브',
    redOptionTitle: '뉴진스',
    category: Category.enter,
    blueVoteCount: '12',
    redVoteCount: '30',
    voteTotalCount: '42',
  },
  id: 'asdfasdasd',
  createAt: '2023-01-27',
  dataImage: [
    { url: 'https://i.ibb.co/xG6WYQD/image.jpg' },
    { url: 'https://i.ibb.co/pfBfWyv/image.jpg' },
  ],
  dataUser: null,
};

export const BattleMockList = [BattleMock, BattleMock, BattleMock, BattleMock];

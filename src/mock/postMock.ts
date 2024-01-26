import { Category, GetBattleInfoType } from '@/types/postType.ts';

export const BattleMock: GetBattleInfoType = {
  data: {
    nickName: '하니좋아하니',
    profileUrl: '',
    userId: '12',
    title: '아이브 vs 뉴진스',
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
  dataImage: [{ url: '' }, { url: '' }],
  dataUser: null,
};

export const BattleMockList = [BattleMock, BattleMock, BattleMock, BattleMock];

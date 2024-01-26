import { CommentType } from '@/types/postType.ts';

export const commentMock: CommentType[] = [
  {
    userInfo: {
      imgUrl: '',
      nickName: '도라에몽',
    },
    content: '대나무 헬리콥터',
    parentId: 12,
    createdAt: new Date(),
    option: 1,
  },
  {
    userInfo: {
      imgUrl: '',
      nickName: '맛집 평가단',
    },
    content:
      '옛날에 많이 왔다는 추천으로 몇번 왔는데요 탕수육 은 이번이 처음이었는데요 진짜 맛있어요 아삭아삭하고요 소스는 다 먹을 때 까지 따뜻해서 식감이 더욱 좋았고요 냉 짬뽕은 3단계 매운맛이지만요 볶음밥에 짜장비벼서 함께먹으니 너무 맛있고요 볶음밥은 말해서 뭐해요 그래도 말해야 알죠 진짜 맛있어요',
    parentId: 12,
    createdAt: new Date(),
    option: 2,
  },
  {
    userInfo: {
      imgUrl: '',
      nickName: '도라에몽',
    },
    content: '대나무 헬리콥터',
    parentId: 12,
    createdAt: new Date(),
    option: 2,
  },
  {
    userInfo: {
      imgUrl: '',
      nickName: '맛집 평가단',
    },
    content:
      '옛날에 많이 왔다는 추천으로 몇번 왔는데요 탕수육 은 이번이 처음이었는데요 진짜 맛있어요 아삭아삭하고요 소스는 다 먹을 때 까지 따뜻해서 식감이 더욱 좋았고요 냉 짬뽕은 3단계 매운맛이지만요 볶음밥에 짜장비벼서 함께먹으니 너무 맛있고요 볶음밥은 말해서 뭐해요 그래도 말해야 알죠 진짜 맛있어요',
    parentId: 12,
    createdAt: new Date(),
    option: 1,
  },
];

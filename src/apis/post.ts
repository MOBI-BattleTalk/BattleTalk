import {
  type GetBattleInfoType,
  type GetCommentType,
  type GetDetailBattleInfoType,
  type PatchVoteCountType,
  type PostCommentType,
} from '@/types/postType';
import { axiosInstance } from './core';
import { END_POINTS } from '@/const/EndPoint'; // BattleApi.ts

// BattleApi.ts
const BattleApi = {
  //post 생성 api 요청.
  postCreateBattle: async (data: FormData) => {
    const res = await axiosInstance.post(END_POINTS.POST, data, {
      params: {
        auth: 'true',
      },
    });
    return res;
  },
  // postData get api 요청
  getBattleInfo: async (): Promise<GetBattleInfoType[]> => {
    const res = await axiosInstance.get(END_POINTS.POST);
    return res.data;
  },
  // 무한 스크롤 구현을 위해 주석 처리 해놓았습니다.
  // getBattleInfo: async (pageParam: unknown) => {
  //   const res = await axiosInstance.get<GetBattleInfoType>(
  //     END_POINTS.POST + `&page=${pageParam}`,
  //   );
  //   return res.data;
  // },

  // 배틀 정보 수정 (voteCount up 용도)
  patchBattle: async (voteResult: PatchVoteCountType, id: string) => {
    const { blueVoteCount, redVoteCount, voteTotalCount } = voteResult;
    const reqData = {
      data: { blueVoteCount, redVoteCount, voteTotalCount },
    };
    const res = await axiosInstance.patch(END_POINTS.POST + `/${id}`, reqData);
    return res;
  },

  // 배틀 상세 정보 요청
  getDetailBattleInfo: async (postId: string) => {
    const res = await axiosInstance.get<GetDetailBattleInfoType>(
      END_POINTS.DETAIL_POST,
      {
        params: {
          dataId: postId,
        },
      },
    );
    return res.data;
  },

  // 배틀 참여하기(댓글 작성) api 요청(BattleJoinModal)
  postComment: async (data: PostCommentType) => {
    const res = await axiosInstance.post(END_POINTS.COMMENT, data);
    return res;
  },
  // 댓글 불러오기 api 요청
  getComment: async () => {
    const res = await axiosInstance.get<GetCommentType>(END_POINTS.COMMENT);
    return res.data;
  },
  //작성글 삭제
  deleteBattleInfo: async (id: string) => {
    const res = await axiosInstance.delete(END_POINTS.POST + `${id}`);
    return res;
  },
  // 댓글 삭제
  deleteComment: async (id: string) => {
    const res = await axiosInstance.delete(END_POINTS.COMMENT + `${id}`);
    return res;
  },
};

export default BattleApi;

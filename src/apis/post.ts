import type {GetBattleInfoType, PostCommentType} from '@/types/postType';
import {axiosInstance} from './core';
import {END_POINTS} from '@/const/EndPoint'; // BattleApi.ts

// BattleApi.ts
const BattleApi = {
  //post 생성 api 요청.
  postCreateBattle: async (data: FormData) => {
    const res = await axiosInstance.post(END_POINTS.POST, data);
    return res;
  },
  //posData get api 요청
  getBattleInfo: async () => {
    const res = await axiosInstance.get<GetBattleInfoType>(END_POINTS.POST);
    return res.data;
  },
  //배틀 참여하기 api 요청(BattleJoinModal)s
  postComment: async (data: PostCommentType) => {
    const res = await axiosInstance.post(END_POINTS.COMMENT, data);
    console.log('aaa', res);
    return res;
  },
};

export default BattleApi;

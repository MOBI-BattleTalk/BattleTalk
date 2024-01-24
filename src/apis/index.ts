import { PostType } from '@/types';
import { axiosInstance } from './core';

// BattleApi.ts
const BattleApi = {
  //백에서 받아오는 데이터 타입
  getBattleInfo: async () => {
    const res = await axiosInstance.get<PostType>('/data/battleInfo');
    return res.data;
  },
};

export default BattleApi;

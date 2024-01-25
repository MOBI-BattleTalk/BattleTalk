import type { GetBattleInfoType } from '@/types/postType';
import { axiosInstance } from './core';

// BattleApi.ts
const BattleApi = {
  //백에서 받아오는 데이터 타입
  getBattleInfo: async () => {
    const res = await axiosInstance.get<GetBattleInfoType>('/data/battleInfo');
    return res.data;
  },
};

export default BattleApi;

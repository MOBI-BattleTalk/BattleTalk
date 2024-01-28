import DetailBattleCard from '@/pages/DetailPage/components/DetailBattleCard.tsx';
import CommentList from '@/pages/DetailPage/components/CommentList.tsx';
import { useQuery } from '@tanstack/react-query';
import BattleApi from '@/apis/post';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id: battlePostId } = useParams();

  const { data: detailBattleData } = useQuery({
    queryKey: [BATTLE_QUERY_KEY.DETAIL_BATTLE_DATA, battlePostId],
    queryFn: () => BattleApi.getDetailBattleInfo(battlePostId!),
  });

  detailBattleData && console.log('상세정보', detailBattleData.data.createdAt);

  return (
    <div>
      {detailBattleData && <DetailBattleCard post={detailBattleData} />}
      <div className="mb-[60px]">
        <CommentList />
      </div>
    </div>
  );
};

export default DetailPage;

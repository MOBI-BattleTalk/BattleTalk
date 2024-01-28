import DetailBattleCard from '@/pages/DetailPage/components/DetailBattleCard.tsx';
import CommentList from '@/pages/DetailPage/components/CommentList.tsx';
import { useQuery } from '@tanstack/react-query';
import BattleApi from '@/apis/post';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  // 현재 상세페이지에  id
  const { id: battlePostId } = useParams();

  // 배틀 상세 정보
  const { data: detailBattleData } = useQuery({
    queryKey: [BATTLE_QUERY_KEY.DETAIL_BATTLE_DATA, battlePostId],
    queryFn: () => BattleApi.getDetailBattleInfo(battlePostId!),
  });

  // 댓글 정보
  const { data: commentList } = useQuery({
    queryKey: [BATTLE_QUERY_KEY.COMMENT_LIST, battlePostId],
    queryFn: BattleApi.getComment,
  });

  return (
    <div>
      {detailBattleData && <DetailBattleCard post={detailBattleData} />}
      <div className="mb-[60px]">
        {commentList && (
          <CommentList commentList={commentList} battlePostId={battlePostId} />
        )}
      </div>
    </div>
  );
};

export default DetailPage;

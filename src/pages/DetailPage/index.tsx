import DetailBattleCard from '@/pages/DetailPage/components/DetailBattleCard.tsx';
import CommentList from '@/pages/DetailPage/components/CommentList.tsx';
import { BattleMock } from '@/mock/postMock.ts';

const DetailPage = () => {
  const post = BattleMock;

  return (
    <div>
      <DetailBattleCard post={post} />
      <div className="mb-[60px]">
        <CommentList />
      </div>
    </div>
  );
};

export default DetailPage;

import DetailBattleCard from '@/pages/DetailPage/components/DetailBattleCard.tsx';
import CommentList from '@/pages/DetailPage/components/CommentList.tsx';

const DetailPage = () => {
  return (
    <div>
      <DetailBattleCard />
      <div className="mb-[60px]">
        <CommentList />
      </div>
    </div>
  );
};

export default DetailPage;

import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import { BattleMockList } from '@/mock/postMock.ts';

const MainPage = () => {
  return (
    <div className={'flex gap-[30px] flex-col pb-[50px]'}>
      {BattleMockList.map((post) => {
        return <MainBattleCard post={post} />;
      })}
    </div>
  );
};

export default MainPage;

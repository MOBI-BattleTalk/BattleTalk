import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import { BattleMockList } from '@/mock/postMock.ts';

const MainPage = () => {
  return (
    <div className={'flex gap-[30px] flex-col pb-[50px]'}>
      {BattleMockList.map((post, index) => {
        return <MainBattleCard post={post} key={index} />;
      })}
    </div>
  );
};

export default MainPage;

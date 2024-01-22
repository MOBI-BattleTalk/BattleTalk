import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';

const MainPage = () => {
  return (
    <div className={'flex gap-[30px] flex-col'}>
      <MainBattleCard />
      <MainBattleCard />
      <MainBattleCard />
      <MainBattleCard />
    </div>
  );
};

export default MainPage;

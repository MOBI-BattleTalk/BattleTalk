import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';

const MainPage = () => {
  return (
    <div className={'flex gap-[30px] flex-col pb-[50px]'}>
      <MainBattleCard />
      <MainBattleCard />
      <MainBattleCard />
      <MainBattleCard />
    </div>
  );
};

export default MainPage;

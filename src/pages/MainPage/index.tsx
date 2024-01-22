import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import TopButton from '@/components/TopButton.tsx';

const MainPage = () => {
  return (
    <div className="flex items-center justify-center mt-[100px] gap-[20px] flex-col">
      <MainBattleCard />
      <MainBattleCard />
      <MainBattleCard />
      <TopButton />
    </div>
  );
};

export default MainPage;

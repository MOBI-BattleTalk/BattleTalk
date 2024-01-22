import ResultBar from '@/components/ResultBar.tsx';
import CharaterCounter from '@/components/CharaterCounter.tsx';

const MainBattleCard = () => {
  return (
    <div
      className="w-[800px] h-[265px] bg-backgroundGrey rounded-[20px] flex justify-center items-center
             flex-col"
    >
      <ResultBar redCount={13} blueCount={26} type="small" />
      <CharaterCounter currentNum={12} maxNum={100} />
    </div>
  );
};

export default MainBattleCard;

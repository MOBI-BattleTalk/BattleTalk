import ResultBar from '@/components/ResultBar.tsx';

const MainBattleCard = () => {
  return (
    <div
      className="w-[800px] h-[265px] bg-background rounded-[20px] flex justify-center items-center
             flex-col"
    >
      <ResultBar redCount={13} blueCount={26} type="small" />
      <ResultBar redCount={64} blueCount={36} type="small" />
      <ResultBar redCount={9.9} blueCount={0.1} type="large" />
      <ResultBar redCount={0.1} blueCount={9.9} type="large" />
    </div>
  );
};

export default MainBattleCard;

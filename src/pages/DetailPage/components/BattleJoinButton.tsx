import Button from '@/components/Button.tsx';
import BlueFightIcon from '@/assets/BlueFight.svg?react';
import RedFightIcon from '@/assets/RedFight.svg?react';

const BattleJoinButton = () => {
  return (
    <Button size="xlarge" radius="round" fontSize="large" bgColor="darkGray">
      <div className="flex gap-[15px]">
        <BlueFightIcon />
        <span>배틀 참여하기</span>
        <RedFightIcon />
      </div>
    </Button>
  );
};

export default BattleJoinButton;

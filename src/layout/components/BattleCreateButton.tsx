import Button from '@/components/Button.tsx';
// @ts-ignore
import PencilIcon from '@/assets/Pencil.svg?react';

const BattleCreateButton = () => {
  return (
    <Button
      bgColor={'violet'}
      size={'large'}
      radius={'round'}
      fontSize={'large'}
    >
      <PencilIcon />
      배틀 생성
    </Button>
  );
};

export default BattleCreateButton;

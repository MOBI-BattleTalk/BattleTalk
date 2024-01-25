import Button from '@/components/Button.tsx';
import PencilIcon from '@/assets/Pencil.svg?react';
import { useNavigate } from 'react-router-dom';
import { END_POINTS } from '@/const/EndPoint.ts';

const BattleCreateButton = () => {
  const navigate = useNavigate();

  const onMoveCreateBattlePage = () => {
    navigate(END_POINTS.CREATE_BATTLE);
  };

  return (
    <Button
      bgColor={'violet'}
      size={'large'}
      radius={'round'}
      fontSize={'large'}
      onClick={onMoveCreateBattlePage}
    >
      <PencilIcon />
      배틀 생성
    </Button>
  );
};

export default BattleCreateButton;

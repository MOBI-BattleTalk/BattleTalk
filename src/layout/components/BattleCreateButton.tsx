import Button from '@/components/Button.tsx';
import PencilIcon from '@/assets/Pencil.svg?react';
import { useNavigate } from 'react-router-dom';

const BattleCreateButton = () => {
  const navigate = useNavigate();

  const onMoveCreateBattlePage = () => {
    navigate('/createBattle');
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

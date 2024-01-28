import Button from '@/components/Button.tsx';
import PencilIcon from '@/assets/Pencil.svg?react';
import { useNavigate } from 'react-router-dom';
import { END_POINTS } from '@/const/EndPoint.ts';
import LocalStorage from '@/utils/localStorage';
import { STORAGE_KEYS } from '@/const/Keys';
import { MODAL } from '@/const/ModalMessage';
import BasicModal from '@/components/BasicModal';
import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';

const BattleCreateButton = () => {
  const navigate = useNavigate();

  const userInfo = LocalStorage.getItem(STORAGE_KEYS.USER_INFO);
  const createBattleJoin = MODAL.CONFIRM_BATTLE_JOIN;

  const onMoveCreateBattlePage = () => {
    if (userInfo) {
      navigate(END_POINTS.CREATE_BATTLE);
    }
  };

  return (
    <>
      <BasicModal
        {...createBattleJoin}
        func={() => {
          navigate(END_POINTS.LOGIN);
        }}
      />
      <AlertDialogTrigger asChild>
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
      </AlertDialogTrigger>
    </>
  );
};

export default BattleCreateButton;

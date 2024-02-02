import Button from '@/components/Button.tsx';
import BlueFightIcon from '@/assets/BlueFight.svg?react';
import RedFightIcon from '@/assets/RedFight.svg?react';
import { Toaster } from 'react-hot-toast';
import toastMessage, { TOAST_MESSAGE } from '@/utils/toastMessage.tsx';

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hasMyComment: boolean;
};

const BattleJoinButton: React.FC<Props> = ({
  setIsModalOpen,
  hasMyComment,
}) => {
  const onClickButton = () => {
    //이미 참가한 배틀일 경우
    if (hasMyComment) {
      return toastMessage(true, TOAST_MESSAGE.ALREADY_JOIN_BATTLE);
    }
    //참가한 배틀이 아닐 경우 모달 띄우기
    return setIsModalOpen(true);
  };

  return (
    <Button
      size="xlarge"
      radius="round"
      fontSize="large"
      bgColor="darkGray"
      onClick={onClickButton}
    >
      <Toaster />
      <div className="flex gap-[15px]">
        <BlueFightIcon />
        <span>배틀 참여하기</span>
        <RedFightIcon />
      </div>
    </Button>
  );
};

export default BattleJoinButton;

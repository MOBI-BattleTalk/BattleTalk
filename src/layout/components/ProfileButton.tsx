import OpenIcon from '@/assets/OpenArrow.svg?react';
import CloseIcon from '@/assets/CloseArrowIcon.svg?react';
import { useRef, useState } from 'react';
import NavigateBox from '@/components/NavigateBox.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { AlertDialogTrigger } from '@/components/ui/alert-dialog.tsx';
import ProfileModal from '@/components/ProfileModal.tsx';

type Props = {
  imgUrl: string;
  nickname: string;
};

const ProfileButton: React.FC<Props> = ({ imgUrl, nickname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalButton = useRef<HTMLButtonElement | null>(null);

  const onClickModalButton = () => {
    modalButton.current!.click();
  };

  const onOpenProfile = () => {
    setIsOpen(true);
  };

  const onCloseProfile = () => {
    setIsOpen(false);
  };
  return (
    <AlertDialog>
      <div className="relative w-[150px] flex items-center justify-center">
        <div
          className="flex gap-[10px] items-center justify-center"
          onMouseEnter={onOpenProfile}
          onMouseLeave={onCloseProfile}
        >
          <ImageBox imgUrl={imgUrl} size="tiny" imageShape="rounded" />
          <div>{nickname}</div>
          <div className="flex items-center justify-center">
            {isOpen ? <OpenIcon /> : <CloseIcon />}
          </div>
        </div>
        <div
          className="absolute top-[40px] pt-[10px]"
          onMouseEnter={onOpenProfile}
          onMouseLeave={onCloseProfile}
        >
          <AlertDialogTrigger asChild>
            <button className={'hidden'} ref={modalButton}>
              버튼
            </button>
          </AlertDialogTrigger>
          {isOpen && (
            <NavigateBox
              type={'vertical'}
              OptionsArr={[
                {
                  name: '프로필 수정',
                  func: onClickModalButton,
                },
                {
                  name: '로그아웃',
                  func: () => {},
                },
              ]}
            />
          )}
        </div>
      </div>
      <ProfileModal />
    </AlertDialog>
  );
};

export default ProfileButton;

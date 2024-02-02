import OpenIcon from '@/assets/OpenArrow.svg?react';
import CloseIcon from '@/assets/CloseArrowIcon.svg?react';
import { useRef, useState } from 'react';
import NavigateBox from '@/components/NavigateBox.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { AlertDialogTrigger } from '@/components/ui/alert-dialog.tsx';
import ProfileModal from '@/components/ProfileModal.tsx';
import AuthApi from '@/apis/auth.ts';
import defaultProfile from '@/assets/image/defaultProfile.png';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/atom/user.ts';
import { useNavigate } from 'react-router-dom';

type Props = {
  imgUrl: string | null;
  nickname: string;
};

const ProfileButton: React.FC<Props> = ({ imgUrl, nickname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalButton = useRef<HTMLButtonElement | null>(null);
  const setUserAtom = useSetRecoilState(userInfoAtom);
  const navigate = useNavigate();
  const onClickModalButton = () => {
    setIsModalOpen(true);
    modalButton.current!.click();
  };

  const onOpenProfile = () => {
    setIsOpen(true);
  };

  const onCloseProfile = () => {
    setIsOpen(false);
  };

  //로그아웃 로직
  const onClickLogout = async () => {
    await AuthApi.postSignOut();
    setUserAtom(null);
    navigate('/login');
  };

  return (
    <AlertDialog>
      <div className="relative w-[150px] flex items-center justify-center hover: cursor-pointer">
        <div
          className="flex gap-[10px] items-center justify-center"
          onMouseEnter={onOpenProfile}
          onMouseLeave={onCloseProfile}
        >
          {imgUrl ? (
            <>
              <ImageBox
                imgUrl={imgUrl}
                size="tiny"
                imageShape="rounded"
                clickColor="none"
              />
            </>
          ) : (
            <>
              <ImageBox
                imgUrl={defaultProfile}
                size="tiny"
                imageShape="rounded"
                clickColor="none"
              />
            </>
          )}

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
                  func: onClickLogout,
                },
              ]}
            />
          )}
        </div>
      </div>
      {isModalOpen && <ProfileModal setIsModalOpen={setIsModalOpen} />}
    </AlertDialog>
  );
};

export default ProfileButton;

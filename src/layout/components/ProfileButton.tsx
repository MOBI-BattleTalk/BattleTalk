import OpenIcon from '@/assets/OpenArrow.svg?react';
import CloseIcon from '@/assets/CloseArrowIcon.svg?react';
import { useState } from 'react';
import NavigateBox from '@/components/NavigateBox.tsx';

type Props = {
  imgUrl: string;
  nickname: string;
};

const ProfileButton: React.FC<Props> = ({ imgUrl, nickname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenProfile = () => {
    setIsOpen(true);
  };

  const onCloseProfile = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative w-[100px] h-[50px] flex items-center justify-center">
      <div
        className="flex gap-[5px]"
        onMouseEnter={onOpenProfile}
        onMouseLeave={onCloseProfile}
      >
        <img className="w-[30px] h-[30px] rounded" src={imgUrl} />
        <div>{nickname}</div>
        <div className="flex items-center justify-center">
          {isOpen ? <OpenIcon /> : <CloseIcon />}
        </div>
      </div>
      <div
        className="absolute top-[40px]"
        onMouseEnter={onOpenProfile}
        onMouseLeave={onCloseProfile}
      >
        {isOpen && (
          <NavigateBox
            type={'vertical'}
            OptionsArr={[
              {
                name: '프로필 수정',
                func: () => {},
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
  );
};

export default ProfileButton;

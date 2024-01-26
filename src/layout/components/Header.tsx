import ProfileButton from '@/layout/components/ProfileButton.tsx';
import LoginButton from '@/layout/components/LoginButton.tsx';
import { useNavigate } from 'react-router-dom';
import LocalStorage from '@/utils/localStorage.tsx';
import HeaderLogo from '../../../public/HeaderLogo.png';
import HeaderLogoAction from '../../../public/HeaderLogoAction.png';
import { useState } from 'react';
import DefaultProfileImg from '../../../public/defaultProfile.png';
import { END_POINTS } from '@/const/EndPoint.ts';

interface Props {
  isLogin: boolean;
}

const Header: React.FC<Props> = ({ isLogin }) => {
  const navigate = useNavigate();

  let nickName;
  let profileUrl;

  if (isLogin) {
    const userInfoStr: { nickName: string; profileUrl: string | null } =
      LocalStorage.getItem('userInfo')!;
    nickName = userInfoStr['nickName'];
    profileUrl = userInfoStr['profileUrl'];
  }

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-full flex items-center h-[80px] justify-between bg-white bg-opacity-50 fixed top-0">
      <div
        className="w-[200px] flex justify-center"
        onClick={() => {
          navigate(END_POINTS.HOME);
        }}
      >
        <img
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          onClick={() => navigate(END_POINTS.HOME)}
          src={isHover ? HeaderLogoAction : HeaderLogo}
          className={'scale-150 ml-[80px] hover : cursor-pointer'}
          alt="logo"
        />
      </div>
      <div className="w-[160px]">
        {isLogin ? (
          <ProfileButton
            imgUrl={profileUrl || DefaultProfileImg}
            nickname={nickName!}
          />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default Header;

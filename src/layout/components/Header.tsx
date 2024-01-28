import ProfileButton from '@/layout/components/ProfileButton.tsx';
import LoginButton from '@/layout/components/LoginButton.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { END_POINTS } from '@/const/EndPoint.ts';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/atom/user';
import HeaderLogoAction from '@/assets/image/HeaderLogoAction.png';
import defaultProfile from '@/assets/image/defaultProfile.png';
import HeaderLogo from '@/assets/image/HeaderLogo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const userInfo = useRecoilValue(userInfoAtom);

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
        {userInfo ? (
          <ProfileButton
            imgUrl={userInfo.profileUrl || defaultProfile}
            nickname={userInfo.nickName}
          />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default Header;

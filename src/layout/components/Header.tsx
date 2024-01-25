import ProfileButton from '@/layout/components/ProfileButton.tsx';
import LoginButton from '@/layout/components/LoginButton.tsx';
import { useNavigate } from 'react-router-dom';
import SessionStorage from '@/utils/sessionStorage.tsx';
import HeaderLogo from '../../../public/HeaderLogo.png';
import HeaderLogoAction from '../../../public/HeaderLogoAction.png';
import { useState } from 'react';

interface Props {
  isLogin: boolean;
}

const Header: React.FC<Props> = ({ isLogin }) => {
  const navigate = useNavigate();

  const nickName = SessionStorage.getItem('nickName');
  const profileUrl = SessionStorage.getItem('profileUrl');

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-full flex items-center h-[80px] justify-between bg-white bg-opacity-50 fixed top-0">
      <div
        className="w-[200px] flex justify-center"
        onClick={() => {
          navigate('/');
        }}
      >
        <img
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          onClick={() => navigate('/')}
          src={isHover ? HeaderLogoAction : HeaderLogo}
          className={'scale-150 ml-[80px]'}
          alt="logo"
        />
      </div>
      <div className="w-[160px]">
        {isLogin ? (
          <ProfileButton imgUrl={profileUrl} nickname={nickName!} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default Header;

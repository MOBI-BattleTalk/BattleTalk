import ProfileButton from '@/layout/components/ProfileButton.tsx';
import LoginButton from '@/layout/components/LoginButton.tsx';
import { useNavigate } from 'react-router-dom';
import SessionStorage from '@/utils/sessionStorage.tsx';

interface Props {
  isLogin: boolean;
}

const Header: React.FC<Props> = ({ isLogin }: { isLogin: boolean }) => {
  const navigate = useNavigate();

  const nickName = SessionStorage.getItem('nickName');
  const profileUrl = SessionStorage.getItem('profileUrl');

  return (
    <div className="w-full flex items-center h-[80px] justify-between bg-white bg-opacity-50 fixed top-0">
      <div
        className="w-[200px] flex justify-center"
        onClick={() => {
          navigate('/');
        }}
      >
        <img
          className="w-[200px] pl-[20px]"
          src="../../../public/Logo.png"
          alt="logo"
        />
      </div>
      <div className="w-[160px]">
        {isLogin ? (
          <ProfileButton imgUrl={profileUrl || ''} nickname={nickName!} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default Header;

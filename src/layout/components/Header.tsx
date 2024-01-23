import ProfileButton from '@/layout/components/ProfileButton.tsx';
import LoginButton from '@/layout/components/LoginButton.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLogin] = useState(true);
  const navigate = useNavigate();
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
          <ProfileButton
            imgUrl={'../../../Profile.png'}
            nickname={'도라에몽'}
          />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default Header;

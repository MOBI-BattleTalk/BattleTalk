import Navbar from '@/layout/components/Navbar.tsx';
import ProfileButton from '@/layout/components/ProfileButton.tsx';
import LoginButton from '@/layout/components/LoginButton.tsx';
import { useState } from 'react';

const Header = () => {
  const [isLogin] = useState(true);
  return (
    <div className="w-full flex items-center h-[80px] justify-around bg-white bg-opacity-50 fixed top-0">
      <div className="w-[200px] flex justify-center">
        <img
          className="w-[200px] pl-[20px]"
          src="../../../public/Logo.png"
          alt="logo"
        />
      </div>
      <Navbar />
      <div className="w-[200px]">
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

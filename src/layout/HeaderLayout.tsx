import Header from '@/layout/components/Header.tsx';
import { Outlet } from 'react-router-dom';
import BattleCreateButton from '@/layout/components/BattleCreateButton.tsx';
import TopButton from '@/components/TopButton.tsx';
import cookieStorage from '@/utils/cookieStorage.tsx';
import { useEffect, useState } from 'react';

const HeaderLayout = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  //계정이 없으면 로그인 버튼 아니면 프로필 버튼
  const token = cookieStorage.getCookie('accessToken');

  useEffect(() => {
    if (token) {
      return setIsLogin(true);
    }
    return setIsLogin(false);
  }, [token]);

  return (
    <>
      <Header isLogin={isLogin} />
      <div className="pt-[80px] flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="fixed left-[30px] bottom-[30px]">
        <BattleCreateButton />
      </div>
      <div className="fixed right-[30px] bottom-[30px]">
        <TopButton />
      </div>
    </>
  );
};

export default HeaderLayout;

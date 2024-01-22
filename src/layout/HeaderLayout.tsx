import Header from '@/layout/components/Header.tsx';
import { Outlet } from 'react-router-dom';
import BattleCreateButton from '@/layout/components/BattleCreateButton.tsx';
import TopButton from '@/components/TopButton.tsx';

const HeaderLayout = () => {
  //계정이 없으면 로그인 버튼 아니면 프로필 버튼
  return (
    <>
      <Header />
      <div className="pt-[130px] flex flex-col items-center justify-center">
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
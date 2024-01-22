import Header from '@/layout/components/Header.tsx';
import { Outlet } from 'react-router-dom';
import BattleCreateButton from '@/layout/components/BattleCreateButton.tsx';

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-[130px] flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="fixed left-[30px] bottom-[30px]">
        <BattleCreateButton />
      </div>
    </>
  );
};

export default HeaderLayout;

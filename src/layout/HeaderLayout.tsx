import Header from '@/layout/components/Header.tsx';
import { Outlet } from 'react-router-dom';
import BattleCreateButton from '@/layout/components/BattleCreateButton.tsx';
import TopButton from '@/components/TopButton.tsx';
import { AlertDialog } from '@radix-ui/react-alert-dialog';

const HeaderLayout = () => {
  return (
    <AlertDialog>
      <Header />
      <div className="pt-[80px] flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="fixed left-[30px] bottom-[30px]">
        <BattleCreateButton />
      </div>
      <div className="fixed right-[30px] bottom-[30px]">
        <TopButton />
      </div>
    </AlertDialog>
  );
};

export default HeaderLayout;

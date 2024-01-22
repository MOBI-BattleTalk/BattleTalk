import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import TopButton from '@/components/TopButton.tsx';
import NavigateBox from '@/components/NavigateBox.tsx';
import { useNavigate } from 'react-router-dom';
import Header from '@/pages/MainPage/components/Header.tsx';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="pt-[100px] flex flex-col items-center justify-center gap-[30px]">
        <MainBattleCard />
        <MainBattleCard />
        <MainBattleCard />
        <MainBattleCard />
        <TopButton />
        <NavigateBox
          type={'horizontal'}
          OptionsArr={[
            {
              name: '회원가입',
              func: () => navigate('/'),
            },
            {
              name: '로그인',
              func: () => navigate('/login'),
            },
          ]}
        />
        <NavigateBox
          type={'vertical'}
          OptionsArr={[
            {
              name: '회원가입',
              func: () => navigate('/'),
            },
            {
              name: '로그인',
              func: () => navigate('/login'),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MainPage;

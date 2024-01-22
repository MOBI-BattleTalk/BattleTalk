import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import TopButton from '@/components/TopButton.tsx';
import NavigateBox from '@/components/NavigateBox.tsx';
import { useNavigate } from 'react-router-dom';
import Header from '@/pages/MainPage/components/Header.tsx';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Header />
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
  );
};

export default MainPage;

import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import TopButton from '@/components/TopButton.tsx';
import NavigateBox from '@/components/NavigateBox.tsx';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center mt-[100px] gap-[20px] flex-col">
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

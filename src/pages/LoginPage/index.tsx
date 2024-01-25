import GoBackBtn from '@/assets/GoBack.svg?react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FormChangeBtn from './components/FormChangeBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { flexCenter } from '@/styles/common.style.ts';
import Logo from '../../../public/MediumLogo.png';
import { END_POINTS } from '@/const/EndPoint.ts';

const LoginPage: React.FC = () => {
  const [isSignFormChange, setIsSignFormChange] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(END_POINTS.HOME)}
        className="absolute top-[20px] left-[20px]"
      >
        <GoBackBtn />
      </div>

      <div className={`${flexCenter}`}>
        <img alt="로고" src={Logo} className="w-[600px] scale-75" />
      </div>
      {isSignFormChange ? <SignIn /> : <SignUp />}
      <FormChangeBtn
        isSignFormChange={isSignFormChange}
        setIsSignFormChange={setIsSignFormChange}
      />
    </>
  );
};

export default LoginPage;

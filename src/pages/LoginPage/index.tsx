import GoBackBtn from '@/assets/GoBack.svg?react';
import { flexCenter } from '@/styles/common.style';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FormChangeBtn from './components/FormChangeBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [isSignFormChange, setIsSignFormChange] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <div onClick={() => navigate('/main')}>
          <GoBackBtn />
        </div>
      </div>
      <div className={`${flexCenter}`}>
        <img src="../../../public/Logo.png" className="w-[600px] m-[64px]" />
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

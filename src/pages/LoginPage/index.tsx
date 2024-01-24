import GoBackBtn from '@/assets/GoBack.svg?react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FormChangeBtn from './components/FormChangeBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { flexCenter } from '@/styles/common.style.ts';

const LoginPage: React.FC = () => {
  const [isSignFormChange, setIsSignFormChange] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="m-[20px]">
        <div onClick={() => navigate('/main')}>
          <GoBackBtn />
        </div>
      </div>
      <div className={`${flexCenter}`}>
        <img src="../../../public/Logo.png" className="w-[600px]" />
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

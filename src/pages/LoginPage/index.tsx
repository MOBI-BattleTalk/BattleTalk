import { flexCenter } from '@/styles/common.style';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FormChangeBtn from './components/FormChangeBtn';
import { useState } from 'react';

const LoginPage: React.FC = () => {
  const [isSignFormChange, setIsSignFormChange] = useState<boolean>(true);

  return (
    <>
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

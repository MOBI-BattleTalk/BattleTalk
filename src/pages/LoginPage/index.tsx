import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FormChangeBtn from './components/FormChangeBtn';
import { useState } from 'react';
import Logo from '../../../public/MainLogo.png';
import GoBackButton from '@/components/GoBackButton.tsx';

const LoginPage: React.FC = () => {
  const [isSignFormChange, setIsSignFormChange] = useState<boolean>(true);

  return (
    <div>
      <GoBackButton />
      <div
        className={`flex items-center justify-center mt-[-40px] w-[100vw] h-[100vh]`}
      >
        <img alt="로고" src={Logo} className="w-[700px] ml-[-100px] scale-75" />
        <div>
          {isSignFormChange ? <SignIn /> : <SignUp />}
          <FormChangeBtn
            isSignFormChange={isSignFormChange}
            setIsSignFormChange={setIsSignFormChange}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

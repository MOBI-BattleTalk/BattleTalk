import { RouterProvider } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import router from './router/routing';
import Button from './components/Button';

function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
        <Button bgColor="blue" size="small" radius="basic">
          확인
        </Button>
        <Button bgColor="gray" size="medium" radius="round">
          회원가입
        </Button>
        <Button bgColor="gray" size="large" radius="round">
          로그인
        </Button>
      </RecoilRoot>
    </>
  );
}

export default App;

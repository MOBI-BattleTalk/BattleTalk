import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import ModalPage from '@/pages/ModalPage';
import HeaderLayout from '@/layout/HeaderLayout.tsx';
import LoginPage from '@/pages/LoginPage';
import CreateBattlePage from '@/pages/CreateBattlePage';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/main',
        element: <MainPage />,
      },
      {
        path: '/detail',
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/createBattle',
    element: <CreateBattlePage />,
  },
  {
    path: '/modal',
    element: <ModalPage />,
  },
]);

export default router;

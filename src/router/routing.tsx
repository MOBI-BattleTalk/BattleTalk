import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import ModalPage from '@/pages/ModalPage';
import HeaderLayout from '@/layout/HeaderLayout.tsx';
import DetailPage from '@/pages/DetailPage';
import LoginPage from '@/pages/LoginPage';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/main',
        element: <MainPage />,
      },
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/detail',
        element: <DetailPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/modal',
    element: <ModalPage />,
  },
]);

export default router;

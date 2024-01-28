import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import ModalPage from '@/pages/ModalPage';
import HeaderLayout from '@/layout/HeaderLayout.tsx';
import DetailPage from '@/pages/DetailPage';
import LoginPage from '@/pages/LoginPage';
import CreateBattlePage from '@/pages/CreateBattlePage';
import { END_POINTS } from '@/const/EndPoint.ts';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: END_POINTS.HOME,
        element: <MainPage />,
      },
      {
        path: END_POINTS.DETAIL,
        element: <DetailPage />,
      },
    ],
  },
  {
    path: END_POINTS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: END_POINTS.CREATE_BATTLE,
    element: <CreateBattlePage />,
  },
  /*나중에 삭제*/
  {
    path: '/modal',
    element: <ModalPage />,
  },
]);

export default router;

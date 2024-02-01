import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import CreateBattlePage from '@/pages/CreateBattlePage';
import { END_POINTS } from '@/const/EndPoint.ts';
import DetailPage from '@/pages/DetailPage';
import HeaderLayout from '@/layout/HeaderLayout.tsx';

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
]);

export default router;

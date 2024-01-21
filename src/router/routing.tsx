import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import ModalPage from '@/pages/ModalPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/modal',
    element: <ModalPage />,
  },
]);

export default router;

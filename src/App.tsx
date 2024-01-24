import { RouterProvider } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import router from './router/routing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;

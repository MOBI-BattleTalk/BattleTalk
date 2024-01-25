import { useNavigate } from 'react-router-dom';
import { END_POINTS } from '@/const/EndPoint.ts';

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(END_POINTS.LOGIN);
      }}
      className="font-extrabold"
    >
      로그인
    </div>
  );
};

export default LoginButton;

import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/login');
      }}
      className="font-extrabold"
    >
      로그인
    </div>
  );
};

export default LoginButton;

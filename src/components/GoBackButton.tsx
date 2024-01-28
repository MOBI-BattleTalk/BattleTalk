import GoBackBtn from '@/assets/GoBack.svg?react';
import { useNavigate } from 'react-router-dom';
import { END_POINTS } from '@/const/EndPoint.ts';

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(END_POINTS.HOME)}
      className="fixed top-[20px] left-[20px] hover:cursor-pointer"
    >
      <GoBackBtn />
    </div>
  );
};

export default GoBackButton;

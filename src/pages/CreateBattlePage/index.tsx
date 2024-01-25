import GoBackBtn from '@/assets/GoBack.svg?react';
import FormCard from '@/components/FormCard';
import { flexCenter } from '@/styles/common.style';
import { useNavigate } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import TopButton from '@/components/TopButton';
import { END_POINTS } from '@/const/EndPoint.ts';

const CreateBattlePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-[100px]">
      <div className={'p-[20px]'}>
        <div onClick={() => navigate(END_POINTS.HOME)}>
          <GoBackBtn />
        </div>
      </div>
      <div className={`${flexCenter}`}>
        <img
          src="../../../public/MediumLogo.png"
          className="w-[600px] mb-[40px]"
        />
      </div>
      <FormCard size="large" label="배틀 생성">
        <CreateForm />
      </FormCard>
      <div className="fixed right-[40px] bottom-[40px]">
        <TopButton />
      </div>
    </div>
  );
};

export default CreateBattlePage;

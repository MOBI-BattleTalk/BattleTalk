import FormCard from '@/components/FormCard';
import { flexCenter } from '@/styles/common.style';
import CreateForm from './components/CreateForm';
import TopButton from '@/components/TopButton';
import GoBackButton from '@/components/GoBackButton.tsx';

const CreateBattlePage: React.FC = () => {
  return (
    <div className="mb-[100px]">
      <GoBackButton />
      <div className={`${flexCenter}`}>
        <img
          alt={'로고'}
          src="../../../public/MediumLogo.png"
          className="w-[400px] pt-[30px] lg:w-[500px] mb-[40px]"
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

// @ts-ignore
import GoBackBtn from '@/assets/GoBack.svg?react';
import FormCard from '@/components/FormCard';
import { flexCenter } from '@/styles/common.style';
import { useNavigate } from 'react-router-dom';
import CreateForm from './components/CreateForm';

const CreateBattlePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <GoBackBtn onClick={() => navigate('/main')} />
      <div className={`${flexCenter}`}>
        <img src="../../../public/Logo.png" className="w-[600px] m-[40px]" />
      </div>
      <FormCard size="large" label="배틀 생성">
        <CreateForm />
      </FormCard>
    </>
  );
};

export default CreateBattlePage;
{
  /* <NavigateBox
        type={'vertical'}
        OptionsArr={[
          {
            name: '회원가입',
            func: () => navigate('/'),
          },
          {
            name: '로그인',
            func: () => navigate('/login'),
          },
        ]}
      /> */
}

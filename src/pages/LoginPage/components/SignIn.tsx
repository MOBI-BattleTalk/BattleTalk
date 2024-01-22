import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import LoginInput from '@/components/LoginInput';
import { flexCenter } from '@/styles/common.style';

const SignIn: React.FC = () => {
  const inputLabelArr = ['아이디', '비밀번호'];

  return (
    <>
      <FormCard label="로그인" size="small">
        <div className={`${flexCenter} justify-evenly w-[732px] h-[460px]`}>
          {inputLabelArr.map((el, idx) => (
            <LoginInput key={idx} bgColor="gray" size="large" label={el} />
          ))}
          <Button bgColor="gray" size="large" radius="round" fontSize="large">
            로그인
          </Button>
        </div>
      </FormCard>
    </>
  );
};

export default SignIn;

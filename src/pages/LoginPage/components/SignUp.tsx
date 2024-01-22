import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import LoginInput from '@/components/LoginInput';
import { flexCenter } from '@/styles/common.style';

const SignUp: React.FC = () => {
  const inputLabelArr = ['아이디', '닉네임', '비밀번호', '비밀번호 확인'];

  return (
    <>
      <FormCard label="회원가입" size="medium">
        <div className={`${flexCenter} justify-evenly w-[732px] h-[460px]`}>
          {inputLabelArr.map((el, idx) => (
            <LoginInput key={idx} bgColor="gray" size="large" label={el} />
          ))}
          <Button bgColor="gray" size="large" radius="round" fontSize="large">
            회원가입
          </Button>
        </div>
      </FormCard>
    </>
  );
};

export default SignUp;

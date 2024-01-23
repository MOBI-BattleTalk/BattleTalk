import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import LoginInput from '@/components/LoginInput';

const SignIn: React.FC = () => {
  const inputLabelArr = ['아이디', '비밀번호'];

  return (
    <>
      <FormCard label="로그인" size="small">
        <div
          className={`flex items-center flex-col pt-[100px] gap-[40px] w-[600px] h-[460px]`}
        >
          {inputLabelArr.map((el, idx) => (
            <LoginInput key={idx} bgColor="gray" size="large" label={el} />
          ))}
          <div className="pt-[40px]">
            <Button bgColor="gray" size="large" radius="round" fontSize="large">
              로그인
            </Button>
          </div>
        </div>
      </FormCard>
    </>
  );
};

export default SignIn;

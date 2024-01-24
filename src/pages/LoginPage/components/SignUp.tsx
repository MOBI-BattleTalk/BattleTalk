import FormCard from '@/components/FormCard';

const SignUp: React.FC = () => {
  // const inputLabelArr = ['아이디', '닉네임', '비밀번호', '비밀번호 확인'];
  // const [values, onChange, setValues] = useInput({
  //   id: '',
  //   nickname: '',
  //   password: '',
  // });

  return (
    <>
      <FormCard label="회원가입" size="medium">
        {/*<div className={`${flexCenter} justify-evenly h-[460px] pt-[40px]`}>*/}
        {/*  /!*인풋 맵 돌리기*!/*/}
        {/*  {inputLabelArr.map((el, idx) => (*/}
        {/*    <LoginInput key={idx} bgColor="gray" size="large" label={el} />*/}
        {/*  ))}*/}
        {/*  <div className="pt-[20px]">*/}
        {/*    <Button bgColor="gray" size="large" radius="round" fontSize="large">*/}
        {/*      회원가입*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </FormCard>
    </>
  );
};

export default SignUp;

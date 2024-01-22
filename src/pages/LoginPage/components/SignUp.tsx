import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import LoginInput from '@/components/LoginInput';
import { flexCenter } from '@/styles/common.style';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

const SignUp: React.FC = () => {
  // const passwordschma = Yup.object().shape({
  //   id: Yup.string()
  //     .required('아이디를 입력해주세요.')
  //     .min(2, '아이디는 2자리 이상입니다.')
  //     .max(10, '아이디는 10자리 이하입니다.'),
  //   nickname: Yup.string().required('닉네임을 입력해주세요.'),
  //   password: Yup.string()
  //     .required('비밀번호를 입력해주세요.')
  //     .min(8, '비밀번호는 8자리 이상입니다.')
  //     .max(16, '비밀번호는 16자리 이하입니다.'),

  // });

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

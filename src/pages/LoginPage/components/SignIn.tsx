import React from 'react';
import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import LoginInput from '@/components/LoginInput';
import { flexCenter } from '@/styles/common.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserSubmitForm = {
  id: string;
  password: string;
};

const SignIn: React.FC = () => {
  const schema = Yup.object().shape({
    id: Yup.string()
      .min(2, '아이디는 2자리 이상입니다.')
      .max(10, '아이디는 10자리 이하입니다.')
      .required('아이디를 입력해주세요.'),
    password: Yup.string()
      .min(8, '비밀번호는 8자리 이상입니다.')
      .max(16, '비밀번호는 16자리 이하입니다.')
      .required('비밀번호를 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
  };

  type InputType = 'id' | 'password';
  const inputLabelArr: InputType[] = ['id', 'password'];

  return (
    <>
      <FormCard label="로그인" size="small">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${flexCenter} justify-evenly w-[732px] h-[460px]`}
        >
          {inputLabelArr.map((label, idx) => {
            console.log(inputLabelArr[idx]);
            console.log(errors);
            return (
              <LoginInput
                key={idx}
                bgColor="gray"
                size="large"
                label={label}
                {...register(inputLabelArr[idx])}
                error={errors[inputLabelArr[idx]]?.message}
              />
            );
          })}
          <Button
            type="submit"
            bgColor="gray"
            size="large"
            radius="round"
            fontSize="large"
          >
            로그인
          </Button>
        </form>
      </FormCard>
    </>
  );
};

export default SignIn;

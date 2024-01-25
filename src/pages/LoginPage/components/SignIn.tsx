import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import Input from '@/components/Input.tsx';
import { useForm } from 'react-hook-form';

// export type UserInfo = {
//   id: string;
//   pw: string;
//   nickname: string;
// };

export type InputType = {
  id: string;
  pw: string;
};

const SignIn: React.FC = () => {
  // const inputLabelArr = ['아이디', '비밀번호'];

  // const onSubmit = (data) => console.log(data);

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    mode: 'onChange', //값이 변할때마다 감지
    defaultValues: {
      id: '',
      pw: '',
    },
  });

  console.log(errors);
  return (
    <>
      <FormCard label="로그인" size="small">
        <div
          className={`flex items-center flex-col pt-[100px] gap-[40px] w-[600px] h-[460px]`}
        >
          <Input size="large" label="id" register={register} />

          {/*{inputLabelArr.map((el, idx) => (*/}
          {/*  <LoginInput*/}
          {/*    key={idx}*/}
          {/*    bgColor="gray"*/}
          {/*    size="large"*/}
          {/*    label={el}*/}
          {/*    {...register('id', {*/}
          {/*      required: true,*/}
          {/*      pattern: {*/}
          {/*        value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,*/}
          {/*        message: '유효하지 않은 아이디입니다.',*/}
          {/*      },*/}
          {/*    })}*/}
          {/*  />*/}
          {/*))}*/}
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

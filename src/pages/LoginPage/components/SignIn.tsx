import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import { FieldValues, useForm } from 'react-hook-form';
import LoginInput from '@/components/LoginInput.tsx'; // export type UserInfo = {
import { loginSchema } from '@/const/authSchema.ts';

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      pw: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    return data;
  };

  return (
    <>
      <FormCard label="로그인" size="small">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex items-center flex-col pt-[100px] gap-[40px] w-[600px] h-[460px]`}
        >
          {loginSchema.map((input) => {
            return (
              <LoginInput
                bgColor="gray"
                size={'large'}
                name={input.name}
                label={input.label}
                register={register}
                registerOption={input.registerOption}
                errors={errors}
              />
            );
          })}
          <Button
            bgColor="gray"
            size="large"
            radius="round"
            fontSize="large"
            disabled={!isValid}
          >
            로그인
          </Button>
        </form>
      </FormCard>
    </>
  );
};

export default SignIn;

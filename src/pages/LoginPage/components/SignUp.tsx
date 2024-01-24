import FormCard from '@/components/FormCard';
import { flexCenter } from '@/styles/common.style.ts';
import { FieldValues, useForm } from 'react-hook-form';
import LoginInput from '@/components/LoginInput.tsx';
import { signUpSchema } from '@/const/authSchema.ts';
import Button from '@/components/Button';

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      pw: '',
      nickname: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    return data;
  };

  return (
    <>
      <FormCard label="회원가입" size="medium">
        <form
          className={`${flexCenter} justify-evenly h-[460px] pt-[40px]`}
          onSubmit={handleSubmit(onSubmit)}
        >
          {signUpSchema.map((input) => {
            return (
              <LoginInput
                bgColor="gray"
                name={input.name}
                size={'large'}
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
            회원가입
          </Button>
        </form>
      </FormCard>
    </>
  );
};

export default SignUp;

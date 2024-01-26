import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import { useForm } from 'react-hook-form';
import AuthApi from '@/apis/auth.ts';
import { useNavigate } from 'react-router-dom';
import { SignInType } from '@/types/userType';
import { END_POINTS } from '@/const/EndPoint.ts';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInType>({
    mode: 'onChange',
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const onSubmitSignIn = async (data: SignInType) => {
    const res = await AuthApi.postSignIn(data);
    if (res!.status === 200) {
      navigate(END_POINTS.HOME);
    }
    return res;
  };

  return (
    <>
      <FormCard label="로그인" size="small">
        <form
          onSubmit={handleSubmit(onSubmitSignIn)}
          className={`flex items-center flex-col pt-[100px] gap-[40px] w-[600px] h-[460px]`}
        >
          <div
            className={`bg-backgroundGrey w-[400px] h-[44px] border-b-[2px] border-commonGrey flex flex-col`}
          >
            <div>
              <label className="font-extrabold text-lg text-darkGrey mt-[8px] mr-[16px] justify-start">
                아이디
              </label>
              <input
                className={`bg-backgroundGrey w-[280px] h-[42px] font-extrabold text-lg outline-none justify-end`}
                {...register('userId', {
                  required: true,
                })}
              />
            </div>
            <div className={'text-red pl-[40px] pt-[10px]'}>
              {errors.userId?.message}
            </div>
          </div>
          <div
            className={`bg-backgroundGrey w-[400px] h-[44px] border-b-[2px] border-commonGrey flex flex-col`}
          >
            <div>
              <label className="font-extrabold text-lg text-darkGrey mt-[8px] mr-[16px] justify-start">
                비밀번호
              </label>
              <input
                className={`bg-backgroundGrey w-[280px] h-[42px] font-extrabold text-lg outline-none justify-end`}
                {...register('password', {
                  required: true,
                })}
              />
            </div>
            <div className={'text-red pl-[40px] pt-[10px]'}>
              {errors.userId?.message}
            </div>
          </div>
          <div className={'pt-[40px]'}>
            <Button
              bgColor="gray"
              size="large"
              radius="round"
              fontSize="large"
              disabled={!isValid}
            >
              로그인
            </Button>
          </div>
        </form>
      </FormCard>
    </>
  );
};

export default SignIn;

import FormCard from '@/components/FormCard';
import { flexCenter } from '@/styles/common.style.ts';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import { SignUpType } from '@/types';
import AuthApi from '@/apis/auth.ts';

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpType>({
    mode: 'onChange',
    defaultValues: {
      userId: '',
      password: '',
      nickname: '',
    },
  });

  const onSubmit = async (data: SignUpType) => {
    const res = await AuthApi.postSignUp(data);
    console.log(res);
    return res;
  };

  return (
    <>
      <FormCard label="회원가입" size="medium">
        <form
          className={`${flexCenter} justify-evenly h-[460px] pt-[40px]`}
          onSubmit={handleSubmit(onSubmit)}
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
                  pattern: {
                    value: /^.{4,9}$/,
                    message: '4자에서 10자 사이로 적어주세요.',
                  },
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
                  pattern: {
                    value: /^.{4,9}$/,
                    message: '4자에서 10자 사이로 적어주세요.',
                  },
                })}
              />
            </div>
            <div className={'text-red pl-[40px] pt-[10px]'}>
              {errors.password?.message}
            </div>
          </div>
          <div
            className={`bg-backgroundGrey w-[400px] h-[44px] border-b-[2px] border-commonGrey flex flex-col`}
          >
            <div>
              <label className="font-extrabold text-lg text-darkGrey mt-[8px] mr-[16px] justify-start">
                닉네임
              </label>
              <input
                className={`bg-backgroundGrey w-[280px] h-[42px] font-extrabold text-lg outline-none justify-end`}
                {...register('nickname', {
                  required: true,
                  pattern: {
                    value: /^.{2,9}$/,
                    message: '2자에서 10자 사이로 적어주세요.',
                  },
                })}
              />
            </div>
            <div className={'text-red pl-[40px] pt-[10px]'}>
              {errors.nickname?.message}
            </div>
          </div>
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

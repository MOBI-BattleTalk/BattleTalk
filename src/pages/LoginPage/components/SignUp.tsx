import FormCard from '@/components/FormCard';
import { flexCenter } from '@/styles/common.style.ts';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import AuthApi from '@/apis/auth.ts';
import { useEffect } from 'react';
import { SignUpType } from '@/types/userType';
import toastMessage from '@/utils/toast';
import { Toaster } from 'react-hot-toast';

interface SignUpProps {
  setIsSignFormChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setIsSignFormChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
    watch,
  } = useForm<SignUpType>({
    mode: 'onChange',
    defaultValues: {
      userId: '',
      password: '',
      passwordCheck: '',
      nickname: '',
    },
  });

  //비밀번호 확인 입력후 비밀번호 수정시 일치하는지 검사
  useEffect(() => {
    if (
      watch('password') !== watch('passwordCheck') &&
      watch('passwordCheck')
    ) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      });
    } else {
      clearErrors('passwordCheck');
    }
  }, [watch('password'), watch('passwordCheck')]);

  const onSubmitSignUp = async (data: SignUpType) => {
    try {
      await AuthApi.postSignUp(data);
      toastMessage.signUpSuccessNotify();
      setTimeout(() => {
        setIsSignFormChange((prev) => !prev);
      }, 2000);
    } catch {
      toastMessage.signUpErrorNotify();
    }
  };

  return (
    <>
      <Toaster />
      <FormCard label="회원가입" size="medium">
        <form
          className={`${flexCenter} justify-evenly h-[460px] pt-[40px]`}
          onSubmit={handleSubmit(onSubmitSignUp)}
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
                비밀번호 확인
              </label>
              <input
                className={`bg-backgroundGrey w-[200px] h-[42px] font-extrabold text-lg outline-none justify-end`}
                {...register('passwordCheck', {
                  required: true,
                  pattern: {
                    value: /^.{4,9}$/,
                    message: '4자에서 10자 사이로 적어주세요.',
                  },
                  validate: {
                    check: (val) => {
                      if (getValues('password') !== val) {
                        return '비밀번호가 일치하지 않습니다.';
                      }
                    },
                  },
                })}
              />
            </div>
            <div className={'text-red pl-[40px] pt-[10px]'}>
              {errors.passwordCheck?.message}
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

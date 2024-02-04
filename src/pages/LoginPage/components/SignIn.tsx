import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import { useForm } from 'react-hook-form';
import AuthApi from '@/apis/auth.ts';
import { SignInType } from '@/types/userType';
import { END_POINTS } from '@/const/EndPoint.ts';
import { Toaster } from 'react-hot-toast';
import toastMessage, { TOAST_MESSAGE } from '@/utils/toastMessage';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/atom/user';

const SignIn: React.FC = () => {
  const setUserInfo = useSetRecoilState(userInfoAtom);

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
    try {
      const res = await AuthApi.postSignIn(data);
      setUserInfo({
        userId: res.data.userId,
        nickName: res.data.info.nickName,
        profileUrl: res.data.info.profileUrl,
      });
      toastMessage(true, TOAST_MESSAGE.SIGN_IN_SUCCESS);
      setTimeout(() => {
        if (res.status === 200) {
          window.location.href = END_POINTS.HOME;
        }
      }, 1000);
    } catch {
      toastMessage(false, TOAST_MESSAGE.SIGN_IN_ERROR);
    }
  };

  return (
    <>
      <Toaster />
      <FormCard label="로그인" size="small">
        <form
          onSubmit={handleSubmit(onSubmitSignIn)}
          className={`md:w-[600px] flex items-center flex-col pt-[100px] gap-[40px] h-[460px]`}
        >
          <div
            className={`bg-backgroundGrey w-[400px] h-[44px] border-b-[2px] border-commonGrey flex flex-col`}
          >
            <div>
              <label className="font-extrabold text-lg text-darkGrey mt-[8px] mr-[16px] justify-start">
                아이디
              </label>
              <input
                className={`bg-backgroundGrey md:w-[280px] h-[42px] font-extrabold text-lg outline-none justify-end`}
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

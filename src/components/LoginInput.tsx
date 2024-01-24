import { InputHTMLAttributes } from 'react';
import { FormInterType } from '@/types';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { RegisterOptionType } from '@/const/authSchema.ts';

/**
 * <InputHTMLAttributes<HTMLInputElement>태그에 "size" 속성이 있어 에러가 발생하여 Omit type을 사용했습니다.
 */
interface LoginInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  bgColor: 'gray' | 'white'; //input의 배경색입니다.
  size: 'small' | 'large' | 'full'; //input의 크기 옵션입니다. 'small', 'large', 'full' 중 하나를 선택합니다.
  label: keyof FormInterType;
  name: string;
  register?: UseFormRegister<FieldValues>;
  registerOption?: RegisterOptionType;
  errors?: FieldErrors<FormInterType>;
}

/**
 * 로그인 form에서 사용하는 input 컴포넌트입니다.

 * 사용 예시:
 * <LoginInput bgColor="white" size="large" label="아이디" />
 */
const LoginInput: React.FC<LoginInputProps> = ({
  label,
  bgColor,
  size,
  errors,
  register,
  name,
  registerOption,
  ...rest
}) => {
  const bgColorCSS = {
    gray: `bg-backgroundGrey`,
    white: `bg-white`,
  };

  const sizeCSS = {
    small: { box: 'w-[320px] h-[44px]', input: 'w-[220px] h-[42px]' },
    large: { box: 'w-[400px] h-[44px]', input: 'w-[280px] h-[42px]' },
    full: { box: 'w-full h-[44px]', input: 'w-full h-[42px]' },
  };

  const errorMsg = errors?.[label];

  if (!register) {
    return (
      <div
        className={`${bgColorCSS[bgColor]} ${sizeCSS[size].box} border-b-[2px] border-commonGrey flex`}
      >
        <label className="font-extrabold text-lg text-darkGrey mt-[8px] mr-[16px] justify-start">
          {name}
        </label>
        <input
          {...rest}
          className={`${bgColorCSS[bgColor]} ${sizeCSS[size].input}  font-extrabold text-lg outline-none justify-end`}
        />
      </div>
    );
  }

  return (
    <div
      className={`${bgColorCSS[bgColor]} ${sizeCSS[size].box} border-b-[2px] border-commonGrey flex flex-col`}
    >
      <div>
        <label className="font-extrabold text-lg text-darkGrey mt-[8px] mr-[16px] justify-start">
          {name}
        </label>
        <input
          {...rest}
          className={`${bgColorCSS[bgColor]} ${sizeCSS[size].input}  font-extrabold text-lg outline-none justify-end`}
          {...register(label, {
            ...registerOption,
          })}
        />
      </div>
      <div className={'text-red pl-[40px] pt-[10px]'}>{errorMsg?.message}</div>
    </div>
  );
};

export default LoginInput;

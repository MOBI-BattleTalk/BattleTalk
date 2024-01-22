import {InputHTMLAttributes} from 'react';

/**
 * <InputHTMLAttributes<HTMLInputElement>태그에 "size" 속성이 있어 에러가 발생하여 Omit type을 사용했습니다.
 */
interface LoginInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  bgColor: 'gray' | 'white'; //input의 배경색입니다.
  size: 'small' | 'large' | 'full'; //input의 크기 옵션입니다. 'small', 'large', 'full' 중 하나를 선택합니다.
  label: string; //input 태그의 label에 들어갈 문자열입니다.
}

/**
 * 로그인 form에서 사용하는 input 컴포넌트입니다.

 * // 사용 예시:
 * <LoginInput bgColor="white" size="large" label="아이디" />
 */
const LoginInput: React.FC<LoginInputProps> = ({
  label,
  bgColor,
  size,
  ...rest
}) => {
  const bgColorCSS = {
    gray: `bg-backgroundGrey`,
    white: `bg-white`,
  };

  const sizeCSS = {
    small: { box: 'w-[320px] h-[44px]', input: 'w-[220px] h-[42px]' },
    large: { box: 'w-[380px] h-[44px]', input: 'w-[308px] h-[42px]' },
    full: { box: 'w-full h-[44px]', input: 'w-full h-[42px]' },
  };

  return (
    <div
      className={`${bgColorCSS[bgColor]} ${sizeCSS[size].box} border-b-[2px] border-darkGrey flex`}
    >
      <label className="font-extrabold text-lg text-darkGrey mt-[8px] mr-[16px] justify-start">
        {label}
      </label>
      <input
        {...rest}
        className={`${bgColorCSS[bgColor]} ${sizeCSS[size].input}  font-extrabold text-lg outline-none justify-end`}
      />
    </div>
  );
};

export default LoginInput;

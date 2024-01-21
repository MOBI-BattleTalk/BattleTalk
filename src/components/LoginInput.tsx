import { InputHTMLAttributes } from 'react';

/**
 * <InputHTMLAttributes<HTMLInputElement>태그에 "size" 속성이 있어 에러가 발생하여 Omit type을 사용했습니다.
 */
interface LoginInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 'small' | 'large' | 'full'; //input의 크기 옵션입니다. 'small', 'large', 'full' 중 하나를 선택합니다.
  placeholderTxt: string; //input 태그의 placeholder에 들어갈 문자열입니다.
}

/**
 * 로그인 form에서 사용하는 input 컴포넌트입니다.

 * // 사용 예시:
 * <LoginInput placeholderTxt="아이디" size="small" />
 */
const LoginInput: React.FC<LoginInputProps> = ({
  placeholderTxt,
  size,
  ...rest
}) => {
  const sizeCSS = {
    small: 'w-[288px] h-[36px]',
    large: 'w-[380px] h-[44px]',
    full: 'w-full h-[60px]',
  };

  return (
    <input
      {...rest}
      className={` ${sizeCSS[size]} border-b border-b-2 border-darkGrey font-extrabold text-lg outline-none`}
      placeholder={placeholderTxt}
    />
  );
};

export default LoginInput;

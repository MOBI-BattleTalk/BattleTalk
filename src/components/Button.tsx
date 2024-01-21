import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: 'gray' | 'blue' | 'red'; //버튼의 배경색입니다.
  size: 'small' | 'medium' | 'large'; //버튼의 크기입니다.
  radius: 'basic' | 'round'; //버튼의 굴곡입니다.
}

/**
 * 공용으로 사용 가능한 버튼 컴포넌트입니다.

 * // Button 컴포넌트의 사용 예시
 * <Button bgColor="gray" size="medium" radius="round">로그인</Button>
 */

const Button: React.FC<ButtonProps> = ({
  children,
  bgColor,
  size,
  radius,
  ...rest
}) => {
  const bgColorCSS = {
    gray: `bg-darkGrey`,
    blue: `bg-skyblue`,
    red: 'bg-pink',
  };

  const sizeCSS = {
    small: 'w-[80px] h-[40px]',
    medium: 'w-[160px] h-[50px]',
    large: 'w-[210px] h-[55px]',
  };

  const radiusCSS = {
    basic: 'rounded-md',
    round: 'rounded-full',
  };

  return (
    <button
      {...rest}
      className={`${bgColorCSS[bgColor]} ${sizeCSS[size]} ${radiusCSS[radius]} text-white hover:bg-violet font-extrabold`}
    >
      {children}
    </button>
  );
};

export default Button;

import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: 'gray' | 'blue' | 'red' | 'violet' | 'darkGray'; //버튼의 배경색입니다.
  size: 'small' | 'medium' | 'large' | 'xlarge'; //버튼의 크기입니다.
  radius: 'basic' | 'round'; //버튼의 굴곡입니다.
  fontSize: 'small' | 'medium' | 'large'; //버튼내 폰트 크기입니다.
}

/**
 * 공용으로 사용 가능한 버튼 컴포넌트입니다.
 * // Button 컴포넌트의 사용 예시
 * <Button bgColor="gray" size="medium" radius="round">로그인</Button>
 */

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  bgColor,
  radius,
  fontSize = 'large',
  ...rest
}) => {
  const bgColorCSS = {
    gray: `bg-commonGrey hover:bg-violet`,
    blue: `bg-skyblue`,
    red: 'bg-pink',
    violet: 'bg-violet hover:bg-skyblue',
    darkGray: 'bg-textGrey hover:bg-violet',
  };

  const sizeCSS = {
    small: 'w-[80px] h-[40px]',
    medium: 'w-[150px] h-[50px]',
    large: 'w-[165px] h-[50px]',
    xlarge: 'w-[250px] h-[50px]',
  };

  const radiusCSS = {
    basic: 'rounded-md',
    round: 'rounded-full',
  };

  const fontCSS = {
    small: 'text-[14px]',
    medium: 'text-[18px]',
    large: 'text-[20px]',
  };

  return (
    <button
      {...rest}
      className={`${bgColorCSS[bgColor]} ${sizeCSS[size]} ${radiusCSS[radius]} ${fontCSS[fontSize]} text-white hover:bg-violet font-bold`}
    >
      <div className={'flex items-center justify-center gap-[7px]'}>
        {children}
      </div>
    </button>
  );
};

export default Button;

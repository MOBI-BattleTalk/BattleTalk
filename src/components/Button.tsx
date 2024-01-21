import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: 'gray' | 'blue' | 'red';
  size: 'small' | 'medium' | 'large';
  radius: 'basic' | 'round';
}

/**
 * 공용으로 사용 가능한 버튼 컴포넌트입니다.
 * @component
 *
 * @param {object} props - 버튼의 속성들입니다.
 * @param {'gray' | 'blue' | 'red'} props.bgColor - 버튼의 배경색입니다.
 * @param {'small' | 'medium' | 'large'} props.size - 버튼의 크기입니다.
 * @param {'basic' | 'round'} props.radius - 버튼의 굴곡입니다.
 * @param {React.ReactNode} props.children - 버튼 내부의 내용입니다.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props...rest -  HTML button 태그 고유 속성입니다.
 *
 * @example
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
  /**
   * 각 배경색을 담고있는 객체입니다.
   * @type {ButtonProps}
   */
  const bgColorCSS = {
    gray: `bg-darkGrey`,
    blue: `bg-skyblue`,
    red: 'bg-pink',
  };

  /**
   * 각 크기를 담고있는 객체입니다.
   * @type {ButtonProps}
   */
  const sizeCSS = {
    small: 'w-[80px] h-[40px]',
    medium: 'w-[160px] h-[50px]',
    large: 'w-[210px] h-[55px]',
  };

  /**
   * 각 굴곡을 담고있는 객체입니다.
   * @type {ButtonProps}
   */
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

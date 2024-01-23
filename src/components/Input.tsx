import { InputHTMLAttributes } from 'react';

// 컴포넌트의 props 타입을 정의합니다.
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 'small' | 'medium' | 'large' | 'box'; // 'size' prop은 'InputSize' 타입이며, 선택적입니다.
}

const Input: React.FC<InputProps> = ({ size, ...rest }) => {
  // 입력 박스 크기에 따른 스타일 설정
  const sizeStyles = {
    small: 'w-[108px] h-[57px] border-4 border-lineGrey rounded-xl',
    medium: 'w-[580px] h-[57px] border-4 border-lineGrey rounded-xl',
    large: 'w-[640px] h-[57px] border-4 border-lineGrey rounded-xl',
    box: 'w-[400px] h-[150px] border-4 border-lineGrey rounded-xl',
  };

  return (
    <div className={`${sizeStyles[size]}`}>
      <input
        {...rest}
        className="w-full h-full text-lg font-extrabold rounded-xl p-[4px]"
      />
    </div>
  );
};

export default Input;

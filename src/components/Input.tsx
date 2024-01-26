import {InputHTMLAttributes} from 'react'; // 컴포넌트의 props 타입을 정의합니다.

// 컴포넌트의 props 타입을 정의합니다.
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 'small' | 'medium' | 'large' | 'box' | 'smallMedi' | 'option'; // input의 크기 속성입니다.
  isValueLengthCounter?: boolean; //CharacterCounter 컴포넌트를 사용할 것인지에 대한 boolean 값입니다
}

const Input: React.FC<InputProps> = ({
  size,
  isValueLengthCounter = false,
  ...rest
}) => {
  // 입력 박스 크기에 따른 스타일 설정
  const sizeStyles = {
    small: 'w-[108px] h-[57px] ',
    smallMedi: 'w-[250px] h-[57px]  ',
    medium: 'w-[500px] h-[50px]',
    large: 'w-[640px] h-[57px] ',
    box: 'w-[400px] h-[150px] ',
    option: 'w-[140px] h-[57px]',
  };

  return (
    <div className={`${sizeStyles[size]}  border-4 border-lineGrey rounded-xl`}>
      <input
        {...rest}
        className={`pl-[10px] w-full h-full text-lg font-extrabold rounded-xl p-[4px] ${isValueLengthCounter && 'pr-[80px]'}`}
      />
    </div>
  );
};

export default Input;

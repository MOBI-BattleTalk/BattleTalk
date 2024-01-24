import {InputHTMLAttributes} from 'react';
import {FormType} from '@/types';
import {UseFormRegister, ValidationRule} from 'react-hook-form';

// 컴포넌트의 props 타입을 정의합니다.
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 'small' | 'medium' | 'large' | 'box' | 'smallMedi' | 'option'; // input의 크기 속성입니다.
  isValueLengthCounter?: boolean; //CharacterCounter 컴포넌트를 사용할 것인지에 대한 boolean 값입니다
  label: keyof FormType;
  register?: UseFormRegister<FormType>;
  registerOption?: RegisterType;
}

type RegisterType = {
  required: boolean;
  pattern: ValidationRule<RegExp> | undefined;
};

const Input: React.FC<InputProps> = ({
  size,
  isValueLengthCounter = false,
  register,
  label,
  // registerOption,
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

  if (!register) {
    return (
      <div
        className={`${sizeStyles[size]}  border-4 border-lineGrey rounded-xl`}
      >
        <label>{label}</label>
        <input
          className={`w-full h-full text-lg font-extrabold rounded-xl p-[4px] ${isValueLengthCounter && 'pr-[80px]'}`}
        />
      </div>
    );
  }

  return (
    <div className={`${sizeStyles[size]}  border-4 border-lineGrey rounded-xl`}>
      <label>{label}</label>
      <input
        className={`w-full h-full text-lg font-extrabold rounded-xl p-[4px] ${isValueLengthCounter && 'pr-[80px]'}`}
        {...register(label, {
          required: true,
          pattern: /^(010)-\d{4}-\d{4}$/,
        })}
      />
      {/*{errors && <div>{errors?.id}</div>}*/}
    </div>
  );
};

export default Input;

import {TextareaHTMLAttributes} from 'react'; // 컴포넌트의 props 타입을 정의합니다.

// 컴포넌트의 props 타입을 정의합니다.
interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size: 'small' | 'medium' | 'large' | 'box'; // textarea의 크기 속성입니다.
}

const Textarea: React.FC<InputProps> = ({ size, ...rest }) => {
  // 입력 박스 크기에 따른 스타일 설정
  const sizeStyles = {
    small: 'w-[540px] h-[120px] border-4 border-lineGrey rounded-xl',
    medium: 'w-[540px] h-[300px] border-4 border-lineGrey rounded-xl',
    large: 'w-[540px] h-[400px] border-4 border-lineGrey rounded-xl',
    box: 'w-[450px] h-[300px] border-4 border-lineGrey rounded-xl',
  };

  return (
    <div className={`${sizeStyles[size]}`}>
      <textarea
        {...rest}
        className={`w-full h-full text-lg font-extrabold rounded-xl p-[4px] overflow-hidden`}
      />
    </div>
  );
};

export default Textarea;

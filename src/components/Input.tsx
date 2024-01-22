// 컴포넌트의 props 타입을 정의합니다.
interface InputProps {
  size: 'title' | 'content'; // 'size' prop은 'InputSize' 타입이며, 선택적입니다.
}

const Input: React.FC<InputProps> = ({
  size, // 기본값을 'title'로 설정합니다.
  ...rest
}) => {
  // 입력 박스 크기에 따른 스타일 설정
  const sizeStyles = {
    title: 'w-[580px] h-[57px] border-4 border-lineGrey rounded-xl',
    content: 'w-[580px] h-[461px] border-4 border-lineGrey rounded-xl',
  };

  if (size === 'content') {
    return (
      <div className={`${sizeStyles[size]} `}>
        <textarea
          {...rest}
          className="w-full h-full text-lg font-extrabold rounded-xl p-[4px]"
        />
      </div>
    );
  }

  return (
    <div className={`${sizeStyles[size]} `}>
      <input
        {...rest}
        className="w-full h-full text-lg font-extrabold rounded-xl p-[4px]"
      />
    </div>
  );
};

export default Input;

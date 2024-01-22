import React, { useState } from 'react';

// 'size' prop을 위한 타입을 정의합니다.
type InputSize = 'title' | 'content';

// 컴포넌트의 props 타입을 정의합니다.
interface InputProps {
  size?: InputSize; // 'size' prop은 'InputSize' 타입이며, 선택적입니다.
  // ... 나머지 props를 위한 타입을 여기에 추가할 수 있습니다.
}

const Input: React.FC<InputProps> = ({
  size = 'title', // 기본값을 'title'로 설정합니다.
  ...rest
}) => {
  const [value, setValue] = useState('');

  // 입력 박스 크기에 따른 스타일 설정
  const sizeStyles = {
    title: 'w-[580px] h-[57px] border-4 border-lineGrey rounded-xl',
    content: 'w-[580px] h-[461px] border-4 border-lineGrey rounded-xl',
  };

  return (
    <div className={`relative ${sizeStyles[size] || sizeStyles.title} `}>
      <input
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full text-lg font-extrabold rounded-xl"
        style={{ paddingRight: '60px' }} // 입력 텍스트에 여유 공간 추가
      />
    </div>
  );
};

export default Input;

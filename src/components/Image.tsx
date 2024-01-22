import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// 이미지 스타일을 위한 타입을 정의합니다.
type ImageSize = 'small' | 'medium' | 'large';
type ImageShape = 'rounded' | 'square'; // 'style' 대신 'imageShape'을 사용합니다.

// ImgUploader 컴포넌트의 props 타입을 정의합니다.
interface ImgUploaderProps {
  size?: ImageSize;
  imageShape?: ImageShape; // 'style' 대신 'imageShape'을 사용합니다.
}

// 각 사이즈 및 스타일에 따른 CSS 속성을 정의합니다.
const sizeStyles = {
  small: 'width: 199px; height: 184px;',
  medium: 'width: 224px; height: 224px;',
  large: 'width: 243px; height: 243px;',
};

const shapeStyles = {
  rounded: 'border-radius: 50%;',
  square: 'border-radius: 10px;',
};

// 스타일 컴포넌트를 정의합니다.
const StyledImage = styled.img<{ size: ImageSize; imageShape: ImageShape }>`
  object-fit: cover;
  border: 1px solid black;
  cursor: pointer;
  ${({ size }) => sizeStyles[size]}
  ${({ imageShape }) =>
    shapeStyles[imageShape]} // 'style' 대신 'imageShape'을 사용합니다.
`;

const StyledInput = styled.input`
  display: none;
`;

const ImgUploader: React.FC<ImgUploaderProps> = ({
  size = 'medium',
  imageShape = 'square', // 'style' 대신 'imageShape'을 사용합니다.
}) => {
  const [fileURL, setFileURL] = useState<string>('');
  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFileURL = URL.createObjectURL(event.target.files[0]);
      setFileURL(newFileURL);
    }
  };

  return (
    <>
      <StyledImage
        size={size}
        imageShape={imageShape}
        src={
          fileURL || 'https://cdn-icons-png.flaticon.com/512/1555/1555492.png'
        }
        alt="Upload"
        onClick={() => imgUploadInput.current?.click()}
      />
      <StyledInput
        type="file"
        accept="image/*"
        required
        ref={imgUploadInput}
        onChange={onImageChange}
      />
    </>
  );
};

export default ImgUploader;

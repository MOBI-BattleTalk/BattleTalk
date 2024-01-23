import React from 'react';

// 이미지 스타일을 위한 타입을 정의합니다.
type ImageSize = 'tiny' | 'smallest' | 'small' | 'medium' | 'large' | 'big';
type ImageShape = 'rounded' | 'square';

// ImgUploader 컴포넌트의 props 타입을 정의합니다.
interface ImageBoxProps {
  imgUrl: string;
  size: ImageSize;
  imageShape: ImageShape;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imgUrl,
  size = 'medium',
  imageShape = 'square',
}) => {
  const sizeClasses = {
    tiny: 'w-[45px] h-[45px]',
    smallest: 'w-[105px] h-[99px]',
    small: 'w-[190px] h-[180px]',
    medium: 'w-[180px] h-[180px]',
    large: 'w-[224px] h-[224px]',
    big: 'w-[243px] h-[243px]',
  };

  const shapeClasses = {
    rounded: 'rounded-full',
    square: 'rounded-xl',
  };

  return (
    <div
      className={`flex justify-center items-center bg-lightGrey ${sizeClasses[size]} ${shapeClasses[imageShape]}`}
    >
      <img
        src={imgUrl}
        alt={'사진'}
        className={`${shapeClasses[imageShape]}`}
      />
      {/* <Photo className="object-cover cursor-pointer" /> */}
    </div>
  );
};

export default ImageBox;

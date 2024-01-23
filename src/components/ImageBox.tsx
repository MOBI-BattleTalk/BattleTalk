import React from 'react';

// 이미지 스타일을 위한 타입을 정의합니다.
type ImageSize = 'tiny' | 'smallest' | 'medium' | 'large' | 'big';
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
    medium: 'w-[170px] h-[170px]',
    large: 'w-[224px] h-[224px]',
    big: 'w-[200px] h-[200px]',
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

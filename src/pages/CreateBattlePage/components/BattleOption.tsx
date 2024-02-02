import CharacterCounter from '@/components/CharaterCounter';
import Input from '@/components/Input';
import { ChangeEvent, useEffect, useState } from 'react';
import Photo from '@/assets/Photo.svg?react';

interface BattleOptionProps {
  blueOptionTitle: string;
  redOptionTitle: string;
  blueOptionImg: File | undefined;
  redOptionImg: File | undefined;
  onCreateBattleFormValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BattleOption: React.FC<BattleOptionProps> = ({
  blueOptionTitle, // 옵션1 제목
  redOptionTitle, // 옵션2 제목
  blueOptionImg, // 옵션1 사진
  redOptionImg, // 옵션2 사진
  onCreateBattleFormValueChange, // 제목 작성란 input의 onChange 함수
  onOptionImgChange, // 이미지 선택한 input의 onChange 함수
}) => {
  const [selectedImage, setSelectedImage] = useState({
    blueOptionImgSrc: '',
    redOptionImgSrc: '',
  });

  /**
   * 이미지 파일을 읽어와서 selectedImage상태를 이미지 src로 업데이트 하는 함수
   *
   * @param {File | undefined} imageFile - 읽어올 이미지 파일 (blueOptionImg, redOptionImg)
   * @param {(src: string) => void} setImageSrc - 상태에 이미지 src를 설정하는 함수 (setSelectedImage)
   */
  const loadImage = (
    imageFile: File | undefined,
    setImageSrc: (src: string) => void,
  ) => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const src = reader.result as string;
        setImageSrc(src);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  // 유저가 이미지를 업로드하면 blueOptionImg, redOptionImg 값이 바뀌면서 useEffect가 실행합니다.
  useEffect(() => {
    loadImage(blueOptionImg, (src) => {
      setSelectedImage((prev) => ({ ...prev, blueOptionImgSrc: src }));
    });
  }, [blueOptionImg]);

  useEffect(() => {
    loadImage(redOptionImg, (src) => {
      setSelectedImage((prev) => ({ ...prev, redOptionImgSrc: src }));
    });
  }, [redOptionImg]);

  return (
    <>
      <div className="flex md:w-[620px] z-20 m-[20px] w-[420px] pl-[20px]">
        <label className="w-[80px] text-xl font-extrabold pt-[16px] text-blue">
          사진
        </label>
        <div className="w-[180px] h-[180px] border-4 border-lineGrey rounded-xl">
          {/* 옵션1 사진 */}
          {selectedImage.blueOptionImgSrc ? (
            <label htmlFor="blueOptionImg">
              <img
                className="w-full h-full rounded-xl bg-contain"
                src={selectedImage.blueOptionImgSrc}
                alt="Selected Option"
              />
            </label>
          ) : (
            <label
              className="cursor-pointer absolute ml-[58px] mt-[58px]"
              htmlFor="blueOptionImg"
            >
              <Photo />
            </label>
          )}
          <input
            id="blueOptionImg"
            className="w-full h-full rounded-xl opacity-0 cursor-pointer relative"
            type="file"
            name="blueOptionImg"
            accept="image/*"
            onChange={onOptionImgChange}
          />
        </div>
      </div>
      <div className="flex md:w-[620px] z-20 m-[20px] w-[420px] pl-[20px]">
        <label className="w-[80px] text-xl font-extrabold pt-[16px] text-blue">
          제목
        </label>
        {/* 옵션1 제목 */}
        <Input
          size="medium"
          isValueLengthCounter={true}
          name="blueOptionTitle"
          maxLength={19}
          value={blueOptionTitle}
          onChange={onCreateBattleFormValueChange}
        />
        <div className="absolute ml-[520px] mt-[16px]">
          <CharacterCounter currentNum={blueOptionTitle.length} maxNum={20} />
        </div>
      </div>
      <div className="flex md:w-[620px] z-20 m-[20px] w-[420px] pl-[20px]">
        <label className="w-[80px] text-xl font-extrabold pt-[16px] text-red">
          사진
        </label>
        <div className="w-[180px] h-[180px] border-4 border-lineGrey rounded-xl">
          {/* 옵션2 사진 */}
          {selectedImage.redOptionImgSrc ? (
            <label htmlFor="redOptionImg">
              <img
                className="w-full h-full rounded-xl bg-contain"
                src={selectedImage.redOptionImgSrc}
                alt="Selected Option"
              />
            </label>
          ) : (
            <label
              className="cursor-pointer absolute ml-[58px] mt-[58px]"
              htmlFor="redOptionImg"
            >
              <Photo />
            </label>
          )}
          <input
            className="w-full h-full rounded-xl opacity-0 cursor-pointer relative"
            id="redOptionImg"
            type="file"
            name="redOptionImg"
            accept="image/*"
            onChange={onOptionImgChange}
          />
        </div>
      </div>
      <div className="flex md:w-[620px] z-20 m-[20px] w-[420px] pl-[20px]">
        <label className="w-[80px] text-xl font-extrabold pt-[16px] text-red">
          제목
        </label>
        {/* 옵션2 제목 */}
        <Input
          size="medium"
          isValueLengthCounter={true}
          name="redOptionTitle"
          maxLength={19}
          value={redOptionTitle}
          onChange={onCreateBattleFormValueChange}
        />
        <div className="absolute ml-[520px] mt-[16px]">
          <CharacterCounter currentNum={redOptionTitle.length} maxNum={20} />
        </div>
      </div>
    </>
  );
};

export default BattleOption;

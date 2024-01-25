import CharacterCounter from '@/components/CharaterCounter';
import Input from '@/components/Input';
import { ChangeEvent } from 'react';

interface BattleOptionProps {
  blueOptionTitle: string;
  redOptionTitle: string;
  onCreateBattleFormValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionEmgChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BattleOption: React.FC<BattleOptionProps> = ({
  blueOptionTitle,
  redOptionTitle,
  onCreateBattleFormValueChange,
  onOptionEmgChange,
}) => {
  return (
    <>
      <div className="flex w-[820px] ml-[240px]">
        <label className="w-[80px] text-xl font-extrabold pt-[16px] text-blue">
          사진
        </label>
        <div
          className="w-[180px] h-[180px] border-4 border-lineGrey rounded-xl"
          style={{ backgroundImage: 'url("@/assets/Photo.svg")' }}
        >
          {/* 옵션1 사진 */}
          <input
            className="w-full h-full rounded-xl opacity-0"
            type="file"
            name="blueOptionEmg"
            accept="image/*"
            onChange={onOptionEmgChange}
          />
        </div>
      </div>
      <div className="flex relative mt-[20px]">
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
      <div className="flex w-[820px] ml-[240px] mt-[20px]">
        <label className="w-[80px] text-xl font-extrabold pt-[16px] text-red">
          사진
        </label>
        <div className="w-[180px] h-[180px] border-4 border-lineGrey rounded-xl">
          {/* 옵션2 사진 */}
          <input
            className="w-full h-full rounded-xl"
            type="file"
            name="redOptionEmg"
            accept="image/*"
            onChange={onOptionEmgChange}
          />
        </div>
      </div>
      <div className="flex relative mt-[20px]">
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

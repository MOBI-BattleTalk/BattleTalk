import CharacterCounter from '@/components/CharaterCounter';
import Input from '@/components/Input';
import useInput from '@/hooks/useInput';

const BattleOption: React.FC = () => {
  const initialOptionInputValue = {
    blueOptionTitle: '',
    redOptionTitle: '',
  };

  const [optionValue, onOptionChange] = useInput(initialOptionInputValue);

  return (
    <>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[220px]">
        <label className="text-xl font-extrabold pt-[16px] text-blue">
          사진
        </label>
        <div className="w-[180px] h-[180px] border-4 border-lineGrey rounded-xl">
          <input className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[220px]">
        <label className="text-xl font-extrabold pt-[16px] text-blue">
          제목
        </label>
        <Input
          size="medium"
          isValueLengthCounter={true}
          name="blueOptionTitle"
          value={optionValue.blueOptionTitle}
          onChange={onOptionChange}
        />
        <div className="absolute ml-[554px] mt-[16px]">
          <CharacterCounter
            currentNum={optionValue.blueOptionTitle.length}
            maxNum={20}
          />
        </div>
      </div>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[220px]">
        <label className="text-xl font-extrabold pt-[16px] text-red">
          사진
        </label>
        <div className="w-[180px] h-[180px] border-4 border-lineGrey rounded-xl">
          <input className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[220px] mb-[40px]">
        <label className="text-xl font-extrabold pt-[16px] text-red">
          제목
        </label>
        <Input
          size="medium"
          isValueLengthCounter={true}
          name="redOptionTitle"
          value={optionValue.redOptionTitle}
          onChange={onOptionChange}
        />
        <div className="absolute ml-[554px] mt-[16px]">
          <CharacterCounter
            currentNum={optionValue.redOptionTitle.length}
            maxNum={20}
          />
        </div>
      </div>
    </>
  );
};

export default BattleOption;

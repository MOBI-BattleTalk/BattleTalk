import Input from '@/components/Input';

const BattleOption: React.FC = () => {
  return (
    <>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[180px]">
        <label className="text-xl font-extrabold pt-[16px] text-blue">
          사진
        </label>
        <div className="w-[220px] h-[220px] border-4 border-lineGrey rounded-xl">
          <input className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[180px]">
        <label className="text-xl font-extrabold pt-[16px] text-blue">
          제목
        </label>
        <Input size="medium" />
      </div>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[180px]">
        <label className="text-xl font-extrabold pt-[16px] text-red">
          사진
        </label>
        <div className="w-[220px] h-[220px] border-4 border-lineGrey rounded-xl">
          <input className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="flex gap-[50px] m-[20px] w-[820px] ml-[180px] mb-[40px]">
        <label className="text-xl font-extrabold pt-[16px] text-red">
          제목
        </label>
        <Input size="medium" />
      </div>
    </>
  );
};

export default BattleOption;

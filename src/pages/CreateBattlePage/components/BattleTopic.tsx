import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

const BattleTopic: React.FC = () => {
  return (
    <>
      <div className="flex gap-[50px] m-[20px]">
        <label className="text-xl font-extrabold pt-[16px]">주제</label>
        <Input size="medium" />
      </div>
      <div className="flex gap-[50px] m-[20px]">
        <label className="text-xl font-extrabold pt-[16px]">내용</label>
        <Textarea size="large" />
      </div>
    </>
  );
};

export default BattleTopic;

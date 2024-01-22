import Input from '@/components/Input';
import { flexCenter } from '@/styles/common.style';
import CategoryOption from './categoryOption';

const CreateForm: React.FC = () => {
  return (
    <div className={`${flexCenter} m-[40px]`}>
      <div className="flex gap-[40px] m-[20px]">
        <label className="text-xl font-extrabold pt-[16px]">제목</label>
        <Input size="title" />
      </div>
      <div className="flex gap-[40px] m-[20px]">
        <label className="text-xl font-extrabold pt-[16px]">내용</label>
        <Input size="content" />
      </div>
      <div className="flex gap-[40px] m-[20px] ">
        <label className="text-xl font-extrabold">카테고리</label>
        <select>
          <CategoryOption />
        </select>
      </div>
    </div>
  );
};

export default CreateForm;

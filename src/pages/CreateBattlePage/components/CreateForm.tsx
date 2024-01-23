import { flexCenter } from '@/styles/common.style';
import { useState } from 'react';
import Button from '@/components/Button';
import BattleTopic from './BattleTopic';
import BattleOption from './BattleOption';
import BattleCategory from './Category';

const CreateForm: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState<string>('전체');

  return (
    <form className={`${flexCenter} m-[40px]`}>
      <BattleTopic />
      <BattleCategory
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      <BattleOption />
      <div className="mt-[50px]">
        <Button bgColor="gray" size="large" fontSize="large" radius="round">
          배틀 업로드
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;

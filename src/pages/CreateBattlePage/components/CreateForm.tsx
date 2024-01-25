import { flexCenter } from '@/styles/common.style';
import { useState } from 'react';
import { Category } from '@/types/postType';
import Button from '@/components/Button';
import BattleTopic from './BattleTopic';
import BattleOption from './BattleOption';
import BattleCategory from './Category';
import useInput from '@/hooks/useInput';
import useGetInputFile from '@/hooks/useGetInputFile';
// import Photo from '@/assets/Photo.svg?react';

const CreateForm: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState<Category>(Category.all);

  const [
    { title, content, blueOptionTitle, redOptionTitle },
    onCreateBattleFormValueChange,
  ] = useInput({
    title: '',
    content: '',
    blueOptionTitle: '',
    redOptionTitle: '',
  });

  const [{ blueOptionEmg, redOptionEmg }, onOptionEmgChange] = useGetInputFile({
    blueOptionEmg: '',
    redOptionEmg: '',
  });

  const onCreateBattle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('qdqwdqwd', blueOptionEmg, redOptionEmg);
  };

  return (
    <form className={`${flexCenter} m-[40px]`} onSubmit={onCreateBattle}>
      <BattleTopic
        title={title}
        content={content}
        onCreateBattleFormValueChange={onCreateBattleFormValueChange}
      />
      <BattleCategory
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      <BattleOption
        blueOptionTitle={blueOptionTitle}
        redOptionTitle={redOptionTitle}
        onCreateBattleFormValueChange={onCreateBattleFormValueChange}
        onOptionEmgChange={onOptionEmgChange}
      />
      <div className="mt-[50px]">
        <Button
          bgColor="gray"
          size="large"
          fontSize="large"
          radius="round"
          type="submit"
        >
          배틀 업로드
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;

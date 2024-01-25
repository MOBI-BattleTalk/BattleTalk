import { flexCenter } from '@/styles/common.style';
import { useState } from 'react';
import { Category } from '@/types/postType';
import Button from '@/components/Button';
import BattleTopic from './BattleTopic';
import BattleOption from './BattleOption';
import BattleCategory from './Category';
import useInput from '@/hooks/useInput';
import useGetInputFile from '@/hooks/useGetInputFile';

const CreateForm: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState<Category>(Category.all);

  // 유저가 작성한 주제, 내용, 옵션1제목, 옵션2제목
  const [
    { title, content, blueOptionTitle, redOptionTitle },
    onCreateBattleFormValueChange,
  ] = useInput({
    title: '',
    content: '',
    blueOptionTitle: '',
    redOptionTitle: '',
  });

  // 유저가 올린 옵션1사진, 옵션2사진
  const [{ blueOptionImg, redOptionImg }, onOptionImgChange] = useGetInputFile({
    blueOptionEmg: undefined,
    redOptionImg: undefined,
  });

  const onCreateBattle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 이제 여기서 formData로 api 요청 로직 구현 예정입니다.
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
        blueOptionImg={blueOptionImg}
        redOptionImg={redOptionImg}
        onCreateBattleFormValueChange={onCreateBattleFormValueChange}
        onOptionImgChange={onOptionImgChange}
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

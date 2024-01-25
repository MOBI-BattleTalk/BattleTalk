import CharacterCounter from '@/components/CharaterCounter';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import { ChangeEvent } from 'react';

interface BattleTopicProps {
  title: string;
  content: string;
  onCreateBattleFormValueChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const BattleTopic: React.FC<BattleTopicProps> = ({
  title,
  content,
  onCreateBattleFormValueChange,
}) => {
  return (
    <>
      <div className="flex gap-[50px] m-[20px] relative">
        <label className="text-xl font-extrabold pt-[16px]">주제</label>
        <Input
          size="medium"
          isValueLengthCounter={true}
          maxLength={19}
          name="title"
          value={title}
          onChange={onCreateBattleFormValueChange}
        />
        <div className="absolute ml-[520px] mt-[16px]">
          <CharacterCounter currentNum={title.length} maxNum={20} />
        </div>
      </div>
      <div className="flex gap-[50px] relative">
        <label className="text-xl font-extrabold pt-[16px]">내용</label>
        <Textarea
          size="large"
          maxLength={499}
          name="content"
          value={content}
          onChange={onCreateBattleFormValueChange}
        />
        <div className="absolute ml-[520px] mt-[368px]">
          <CharacterCounter currentNum={content.length} maxNum={500} />
        </div>
      </div>
    </>
  );
};

export default BattleTopic;

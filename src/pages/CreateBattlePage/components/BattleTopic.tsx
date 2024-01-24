import CharacterCounter from '@/components/CharaterCounter';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import useInput from '@/hooks/useInput';

const BattleTopic: React.FC = () => {
  const initialTopicInputValue = {
    title: '',
    content: '',
  };

  const [topicValue, onInputChange] = useInput(initialTopicInputValue);

  return (
    <>
      <div className="flex gap-[50px] m-[20px] relative">
        <label className="text-xl font-extrabold pt-[16px]">주제</label>
        <Input
          size="medium"
          isValueLengthCounter={true}
          name="title"
          value={topicValue.title}
          onChange={onInputChange}
        />
        <div className="absolute ml-[520px] mt-[16px]">
          <CharacterCounter currentNum={topicValue.title.length} maxNum={100} />
        </div>
      </div>
      <div className="flex gap-[50px] relative">
        <label className="text-xl font-extrabold pt-[16px]">내용</label>
        <Textarea
          size="large"
          name="content"
          value={topicValue.content}
          onChange={onInputChange}
        />
        <div className="absolute ml-[520px] mt-[368px]">
          <CharacterCounter
            currentNum={topicValue.content.length}
            maxNum={500}
          />
        </div>
      </div>
    </>
  );
};

export default BattleTopic;

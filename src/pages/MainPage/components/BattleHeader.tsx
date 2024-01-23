import ImageBox from '@/components/ImageBox.tsx';

const BattleHeader = () => {
  return (
    <div className="flex justify-between pt-[10px]">
      <div className="flex items-center justify-start gap-[10px] pl-[20px]">
        <ImageBox imgUrl={''} size={'tiny'} imageShape={'rounded'} />
        <div>도라에몽</div>
        <div className="text-commonGrey">3시간 전</div>
      </div>
      <div className="flex text-darkGrey items-center justify-start gap-[10px] pr-[20px]">
        <span>23명 참여</span>
      </div>
    </div>
  );
};

export default BattleHeader;

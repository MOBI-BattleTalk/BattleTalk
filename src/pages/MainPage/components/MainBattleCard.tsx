import ResultBar from '@/components/ResultBar.tsx';
import ImageBox from '@/components/ImageBox.tsx';

const MainBattleCard = () => {
  return (
    <div
      className="w-[800px] h-[265px] bg-backgroundGrey rounded-[20px] flex
             flex-col "
    >
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
      <div className="text-center text-xl mt-[10px]">
        나의 소울 푸드는? <br />
        <div className="flex gap-[10px] justify-center text-[18px]">
          <span className="text-deepRed">롯데호텔 차돌박이 짜장면</span>
          <span className="">vs</span>
          <span className="text-deepBlue">칼칼한 해물 짬뽕</span>
        </div>
      </div>
      <div className="flex gap-[10px] align-center justify-center">
        <div className="flex align-center flex-col text-center">
          <ImageBox imgUrl={''} size={'smallest'} imageShape={'square'} />
        </div>
        <ResultBar redCount={13} blueCount={26} type="small" />
        <div className="flex align-center flex-col text-center">
          <ImageBox imgUrl={''} size={'smallest'} imageShape={'square'} />
        </div>
      </div>
    </div>
  );
};

export default MainBattleCard;

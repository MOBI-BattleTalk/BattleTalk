import BattleJoinButton from '@/pages/DetailPage/components/BattleJoinButton.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import ResultBar from '@/components/ResultBar.tsx';
import {
  AlertDialog,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import BattleEnterModal from '@/components/BattleEnterModal.tsx';
import { flexCenter } from '@/styles/common.style.ts';

const DetailBattleCard = () => {
  return (
    <AlertDialog>
      <div className="flex justify-center">
        <div className="w-[450px] min-h-[400px] rounded-[20px] bg-backgroundGrey pt-[20px] md:w-[800px] lg:w-[1000px]">
          <div className="flex items-center justify-start gap-[10px] pl-[20px]">
            <ImageBox imgUrl={''} size={'tiny'} imageShape={'rounded'} />
            <div>도라에몽</div>
            <div className="text-commonGrey">3시간 전</div>
          </div>
          <div className="flex flex-col">
            <div className="text-center text-[20px]">
              죽을 때까지 한 음식만 먹을 수 있다면?
            </div>
            <div className="flex gap-[10px] justify-center text-[20px] font-bold">
              <span className="text-deepRed">롯데호텔 차돌박이 짜장면</span>
              <span className="">vs</span>
              <span className="text-deepBlue">신라호텔 최고급 해물 짬뽕</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[30px] pt-[30px] md:flex-row md:gap-[100px]">
            <div className="flex flex-col text-center text-deepRed">
              <ImageBox imgUrl={''} size={'large'} imageShape={'square'} />
              <span className="pt-[10px]">롯데호텔 차돌박이 짜장면</span>
            </div>
            <div className="flex flex-col text-center text-deepBlue">
              <ImageBox imgUrl={''} size={'large'} imageShape={'square'} />
              <span className="pt-[10px]">신라호텔 최고급 해물 짬뽕</span>
            </div>
          </div>
          <div className={`${flexCenter}`}>
            <div className={'hidden w-[500px] pt-[20px] lg:block'}>
              <ResultBar redCount={13} blueCount={26} type="large" />
            </div>
          </div>
          <div className="flex gap-[10px] align-center justify-center pt-[30px] lg:hidden">
            <ResultBar redCount={13} blueCount={26} type="medium" />
          </div>
          <div className="text-center text-textGrey pt-[20px]">
            23명이 배틀 참여중!
          </div>

          <AlertDialogTrigger asChild>
            <div className="text-center pb-[50px] pt-[5px]">
              <BattleJoinButton />
            </div>
          </AlertDialogTrigger>
        </div>
      </div>
      <BattleEnterModal />
    </AlertDialog>
  );
};

export default DetailBattleCard;

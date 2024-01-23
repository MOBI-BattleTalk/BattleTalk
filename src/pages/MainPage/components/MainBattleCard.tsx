import ResultBar from '@/components/ResultBar.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import BattleHeader from '@/pages/MainPage/components/BattleHeader.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  postId: number;
}

const MainBattleCard: React.FC<Props> = ({ postId }) => {
  const navigate = useNavigate();

  const onMovePostId = () => {
    navigate(`/detail?id=${postId}`);
  };
  return (
    <div
      onClick={onMovePostId}
      className="md:w-[700px] w-[500px] min-h-[230px] bg-backgroundGrey rounded-[20px] flex
             flex-col "
    >
      <BattleHeader />
      <div className="text-center text-xl mt-[10px]">
        나의 소울 푸드는? <br />
        <div className="flex gap-[10px] justify-center text-[18px]">
          <span className="text-deepRed">차돌박이 짜장면</span>
          <span className="">vs</span>
          <span className="text-deepBlue">해물 짬뽕</span>
        </div>
      </div>
      {/*사이즈에 따라 Result 바가 다릅니다.*/}
      <div className="flex items-center justify-center">
        <div className="block md:hidden p-[20px]">
          <ResultBar redCount={13} blueCount={26} type="small" />
        </div>
      </div>
      <div className="flex gap-[10px] align-center justify-center">
        <div className="flex align-center flex-col text-center">
          <ImageBox imgUrl={''} size={'smallest'} imageShape={'square'} />
        </div>
        {/*사이즈에 따라 Result 바가 다릅니다.*/}
        <div className="align-center flex-col text-center hidden xl:block mt-[40px]">
          <ResultBar redCount={13} blueCount={26} type="medium" />
        </div>
        {/*사이즈에 따라 Result 바가 다릅니다.*/}
        <div className="hidden md:block lg:block xl:hidden mt-[40px]">
          <ResultBar redCount={13} blueCount={26} type="small" />
        </div>
        <div className="flex align-center flex-col text-center pb-[20px]">
          <ImageBox imgUrl={''} size={'smallest'} imageShape={'square'} />
        </div>
      </div>
    </div>
  );
};

export default MainBattleCard;

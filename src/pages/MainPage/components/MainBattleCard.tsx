import ResultBar from '@/components/ResultBar.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import BattleHeader from '@/pages/MainPage/components/BattleHeader.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  createAt: string;
  nickName: string;
  profileUrl: string;
  title: string;
  blueOptionTitle: string;
  redOptionTitle: string;
  blueVoteCount: string;
  redVoteCount: string;
  voteTotalCount: string;
  blueOptionImg: string;
  redOptionImg: string;
  postId: string;
}

const MainBattleCard: React.FC<Props> = ({
  createAt,
  nickName,
  profileUrl,
  title,
  blueOptionTitle,
  redOptionTitle,
  blueVoteCount,
  redVoteCount,
  voteTotalCount,
  blueOptionImg,
  redOptionImg,
  postId,
}) => {
  const navigate = useNavigate();

  const onMovePostId = () => {
    navigate(`/detail/${postId}`);
  };

  return (
    <div
      onClick={onMovePostId}
      className="md:w-[600px] w-[400px] min-h-[230px] bg-backgroundGrey rounded-[20px] flex
             flex-col hover: cursor-pointer lg:w-[700px]"
    >
      <BattleHeader
        nickName={nickName}
        profileUrl={profileUrl}
        totalCount={voteTotalCount}
        createdAt={createAt}
      />
      <div className="text-center text-lg mt-[10px]">
        {title} <br />
        <div className="text-sm flex gap-[10px] justify-center text-[18px] md:text-base">
          <span className="text-blue">{blueOptionTitle}</span>
          <span className="">vs</span>
          <span className="text-red"> {redOptionTitle}</span>
        </div>
      </div>
      {/*사이즈에 따라 Result 바가 다릅니다.*/}
      <div className="flex items-center justify-center">
        <div className="block md:hidden p-[20px]">
          <ResultBar
            redCount={Number(redVoteCount)}
            blueCount={Number(blueVoteCount)}
            type="small"
          />
        </div>
      </div>
      <div className="flex gap-[10px] align-center justify-center">
        <div className="flex align-center flex-col text-center">
          <ImageBox
            clickColor={'none'}
            imgUrl={blueOptionImg}
            size={'smallest'}
            imageShape={'square'}
          />
        </div>
        {/*사이즈에 따라 Result 바가 다릅니다.*/}
        <div className="align-center flex-col text-center hidden xl:block mt-[40px]">
          <ResultBar
            redCount={Number(redVoteCount)}
            blueCount={Number(blueVoteCount)}
            type="medium"
          />
        </div>
        {/*사이즈에 따라 Result 바가 다릅니다.*/}
        <div className="hidden md:block lg:block xl:hidden mt-[40px] m-[10px]">
          <ResultBar
            redCount={Number(redVoteCount)}
            blueCount={Number(blueVoteCount)}
            type="small"
          />
        </div>
        <div className="flex align-center flex-col text-center pb-[20px]">
          <ImageBox
            clickColor={'none'}
            imgUrl={redOptionImg}
            size={'smallest'}
            imageShape={'square'}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBattleCard;

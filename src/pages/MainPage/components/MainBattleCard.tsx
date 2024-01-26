import ResultBar from '@/components/ResultBar.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import BattleHeader from '@/pages/MainPage/components/BattleHeader.tsx';
import { useNavigate } from 'react-router-dom';
import { GetBattleInfoType } from '@/types/postType.ts';

interface Props {
  post: GetBattleInfoType;
}

const MainBattleCard: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();

  const onMovePostId = () => {
    navigate(`/detail/${post.id}`);
  };

  return (
    <div
      onClick={onMovePostId}
      className="md:w-[700px] w-[500px] min-h-[230px] bg-backgroundGrey rounded-[20px] flex
             flex-col hover: cursor-pointer"
    >
      <BattleHeader
        nickName={post.data.nickName}
        profileUrl={post.data.profileUrl}
        totalCount={post.data.voteTotalCount}
        createdAt={post.createAt}
      />
      <div className="text-center text-lg mt-[10px]">
        {post.data.title} <br />
        <div className="flex gap-[10px] justify-center text-[18px]">
          <span className="text-deepBlue">{post.data.blueOptionTitle}</span>
          <span className="">vs</span>
          <span className="text-deepRed"> {post.data.redOptionTitle}</span>
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
          <ImageBox
            clickColor={'none'}
            imgUrl={post.dataImage[0].url}
            size={'smallest'}
            imageShape={'square'}
          />
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
          <ImageBox
            clickColor={'none'}
            imgUrl={post.dataImage[1].url}
            size={'smallest'}
            imageShape={'square'}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBattleCard;

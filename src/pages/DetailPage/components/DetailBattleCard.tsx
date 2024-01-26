import BattleJoinButton from '@/pages/DetailPage/components/BattleJoinButton.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import ResultBar from '@/components/ResultBar.tsx';
import {
  AlertDialog,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import BattleEnterModal from '@/components/BattleEnterModal.tsx';
import { flexCenter } from '@/styles/common.style.ts';
import { GetBattleInfoType } from '@/types/postType.ts';
import { timeHelper } from '@/utils/timeHelper.tsx';

interface Props {
  post: GetBattleInfoType;
}

const DetailBattleCard: React.FC<Props> = ({ post }) => {
  return (
    <AlertDialog>
      <div className="flex justify-center">
        <div className="w-[450px] min-h-[400px] rounded-[20px] bg-backgroundGrey pt-[20px] md:w-[800px] lg:w-[1000px]">
          <div className="flex items-center justify-start gap-[10px] pl-[20px]">
            {/*유저 프로필 이미지*/}
            <ImageBox
              imgUrl={post.data.profileUrl}
              size={'tiny'}
              imageShape={'rounded'}
            />
            {/*유저 프로필 닉네임*/}
            <div>{post.data.nickName}</div>
            <div className="text-commonGrey">{timeHelper(post.createAt)}</div>
          </div>
          {/*배틀 타이틀*/}
          <div className="flex flex-col">
            <div className="flex gap-[10px] justify-center text-[20px] font-bold">
              {/*배틀 첫번째 파란 옵션*/}
              <span className="text-deepBlue">{post.data.blueOptionTitle}</span>
              <span className="">vs</span>
              {/*배틀 두번째 레드 옵션*/}
              <span className="text-deepRed">{post.data.redOptionTitle}</span>
            </div>
            <div className="text-center text-[20px] pt-[20px]">
              {post.data.content}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[30px] pt-[30px] md:flex-row md:gap-[100px]">
            {/*배틀 첫번째 파란 옵션 이미지*/}
            <div className="flex flex-col text-center text-deepRed">
              <ImageBox
                imgUrl={post.dataImage[0].url || ''}
                size={'large'}
                imageShape={'square'}
              />
              <span className="pt-[10px] text-deepBlue">
                {post.data.blueOptionTitle}
              </span>
            </div>
            {/*배틀 두번째 빨간 옵션 이미지*/}
            <div className="flex flex-col text-center text-deepBlue">
              <ImageBox
                imgUrl={post.dataImage[1].url || ''}
                size={'large'}
                imageShape={'square'}
              />
              <span className="pt-[10px] text-deepRed">
                {post.data.redOptionTitle}
              </span>
            </div>
          </div>
          {/*투표 집계 바*/}
          <div className={`${flexCenter}`}>
            <div className={'hidden w-[500px] pt-[20px] lg:block'}>
              <ResultBar
                redCount={Number(post.data.redVoteCount)}
                blueCount={Number(post.data.blueVoteCount)}
                type="large"
              />
            </div>
          </div>
          <div className="flex gap-[10px] align-center justify-center pt-[30px] lg:hidden">
            <ResultBar redCount={13} blueCount={26} type="medium" />
          </div>
          <div className="text-center text-textGrey pt-[20px]">
            {post.data.voteTotalCount}명이 배틀 참여중!
          </div>

          <AlertDialogTrigger asChild>
            <div className="text-center pb-[50px] pt-[5px]">
              <BattleJoinButton />
            </div>
          </AlertDialogTrigger>
        </div>
      </div>
      <BattleEnterModal post={post} />
    </AlertDialog>
  );
};

export default DetailBattleCard;

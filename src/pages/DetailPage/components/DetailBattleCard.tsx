import BattleJoinButton from '@/pages/DetailPage/components/BattleJoinButton.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import ResultBar from '@/components/ResultBar.tsx';
import {
  AlertDialog,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import BattleJoinModal from '@/pages/DetailPage/components/BattleJoinModal.tsx';
import { flexCenter } from '@/styles/common.style.ts';
import { GetDetailBattleInfoType } from '@/types/postType.ts';
import { timeHelper } from '@/utils/timeHelper.tsx';
import { useState } from 'react';
import BattleApi from '@/apis/post.ts';
import toastMessage, { TOAST_MESSAGE } from '@/utils/toastMessage.tsx';
import { END_POINTS } from '@/const/EndPoint.ts';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button.tsx';
import BasicModal from '@/components/BasicModal.tsx';
import { MODAL } from '@/const/ModalMessage.ts';
import DefaultImg from '@/assets/image/defaultProfile.png';

interface Props {
  post: GetDetailBattleInfoType;
  hasMyComment: boolean;
  isMyPost: boolean;
}

const DetailBattleCard: React.FC<Props> = ({
  post,
  hasMyComment,
  isMyPost,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const deleteModalProps = MODAL.DELETE_BATTLE;
  const {
    title,
    nickName,
    profileUrl,
    content,
    blueOptionTitle,
    redOptionTitle,
    redVoteCount,
    blueVoteCount,
    voteTotalCount,
  } = post.data.data;
  const { createdAt } = post.data;
  const [blueImageUrl, redImageUrl] = post.data.dataImage;
  const navigate = useNavigate();
  const onClickBattle = async () => {
    try {
      const res = await BattleApi.deleteBattle(post.data.id);
      if (res.status === 200) {
        navigate(END_POINTS.HOME);
        toastMessage(true, TOAST_MESSAGE.DELETE_BATTLE_SUCCESS);
      }
    } catch (err) {
      toastMessage(false, TOAST_MESSAGE.DELETE_BATTLE_FAILURE);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[450px] min-h-[400px] rounded-[20px] bg-backgroundGrey pt-[20px] md:w-[800px] lg:w-[1000px]">
        <div className="flex items-center justify-start gap-[10px] pl-[20px]">
          {/*유저 프로필 이미지*/}
          <ImageBox
            clickColor={'none'}
            imgUrl={profileUrl || DefaultImg}
            size={'tiny'}
            imageShape={'rounded'}
          />
          {/*유저 프로필 닉네임*/}
          <div>{nickName}</div>
          <div className="text-commonGrey">{timeHelper(createdAt)}</div>
          {/*내 포스트일 떄만 삭제 버튼*/}
          {isMyPost && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  bgColor="lightGray"
                  size="xSmall"
                  radius="semiRound"
                  fontSize="small"
                >
                  삭제
                </Button>
              </AlertDialogTrigger>
              <BasicModal {...deleteModalProps} func={onClickBattle} />
            </AlertDialog>
          )}
        </div>
        {/*배틀 타이틀*/}
        <div className="flex flex-col">
          <div className="text-center text-[20px] pt-[20px] font-bold">
            {title}
          </div>
          <div className="text-center text-[20px] pt-[20px]">{content}</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[30px] pt-[30px] md:flex-row md:gap-[100px]">
          {/*배틀 첫번째 파란 옵션 이미지*/}
          <div className="flex flex-col text-center text-red">
            <ImageBox
              clickColor={'none'}
              imgUrl={blueImageUrl?.url || ''}
              size={'large'}
              imageShape={'square'}
            />
            <span className="pt-[10px] text-blue">{blueOptionTitle}</span>
          </div>
          {/*배틀 두번째 빨간 옵션 이미지*/}
          <div className="flex flex-col text-center text-blue">
            <ImageBox
              clickColor={'none'}
              imgUrl={redImageUrl?.url || ''}
              size={'large'}
              imageShape={'square'}
            />
            <span className="pt-[10px] text-red">{redOptionTitle}</span>
          </div>
        </div>
        {/*투표 집계 바*/}
        <div className={`${flexCenter}`}>
          <div className={'hidden w-[500px] pt-[20px] lg:block'}>
            <ResultBar
              redCount={Number(redVoteCount)}
              blueCount={Number(blueVoteCount)}
              type="large"
            />
          </div>
        </div>
        <div className="flex gap-[10px] align-center justify-center pt-[30px] lg:hidden">
          <ResultBar redCount={13} blueCount={26} type="medium" />
        </div>
        <div className="text-center text-textGrey pt-[20px]">
          {voteTotalCount === '0'
            ? '첫번째 배틀 참여자가 되어주세요!'
            : `${voteTotalCount}명이 배틀 참여중!`}
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="text-center pb-[50px] pt-[5px]">
              <BattleJoinButton
                setIsModalOpen={setIsModalOpen}
                hasMyComment={hasMyComment}
              />
            </div>
          </AlertDialogTrigger>
          {isModalOpen && (
            <BattleJoinModal post={post} setIsModalOpen={setIsModalOpen} />
          )}
        </AlertDialog>
      </div>
    </div>
  );
};

export default DetailBattleCard;

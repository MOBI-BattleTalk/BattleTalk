import { timeHelper } from '@/utils/timeHelper.tsx';
import Profile from '../../../assets/image/defaultProfile.png';
import { CommentListType } from '@/types/postType.ts';
import ImageBox from '@/components/ImageBox.tsx';

type Props = {
  comment: CommentListType;
  colorType: 'red' | 'blue';
};

const CommentBox: React.FC<Props> = ({ comment, colorType }) => {
  const { profileUrl, nickName, content } = comment.data;
  const { createdAt } = comment;
  //const userInfo = useRecoilValue(userInfoAtom);
  const borderColor =
    colorType === 'blue' ? 'border-lineSkyblue' : 'border-linePink';

  //내 댓글 삭제가 되는 기능 주석 처리하였습니다.
  // const deleteModalProps = MODAL.DELETE_COMMENT;

  // const onClickComment = async () => {
  //   try {
  //     const res = await BattleApi.deleteComment(comment.id);
  //     if (res.status === 200) {
  //       toastMessage(true, TOAST_MESSAGE.DELETE_BATTLE_SUCCESS);
  //     }
  //   } catch (err) {
  //     toastMessage(false, TOAST_MESSAGE.DELETE_BATTLE_FAILURE);
  //   }
  // };

  //const isMyComment = comment.data.userId === userInfo?.userId;
  return (
    <div
      className={`border-[3px] p-[10px] ${borderColor} rounded-[10px] w-[450px] md:w-[380px] lg:w-[460px] relative mt-[10px]`}
    >
      <div className="flex w-[40px] items-center justify-between">
        <div className="flex items-center">
          <ImageBox
            size="tiny"
            imageShape="rounded"
            imgUrl={profileUrl || Profile}
            clickColor="none"
          />
          <div className={'pl-[10px]'}>{nickName}</div>
          <div className="text-commonGrey ml-[10px]">
            {timeHelper(createdAt)}
          </div>
        </div>
        {/*{isMyComment && (*/}
        {/*  <AlertDialog>*/}
        {/*    <AlertDialogTrigger asChild>*/}
        {/*      <div className="absolute right-[20px]">*/}
        {/*        <Button*/}
        {/*          bgColor="lightGray"*/}
        {/*          size="xSmall"*/}
        {/*          radius="semiRound"*/}
        {/*          fontSize="small"*/}
        {/*        >*/}
        {/*          삭제*/}
        {/*        </Button>*/}
        {/*      </div>*/}
        {/*    </AlertDialogTrigger>*/}
        {/*    <BasicModal {...deleteModalProps} func={onClickComment} />*/}
        {/*  </AlertDialog>*/}
        {/*)}*/}
      </div>

      <div className="mt-[10px] mr-[3px]">{content}</div>
    </div>
  );
};

export default CommentBox;

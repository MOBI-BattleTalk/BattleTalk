import {
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import Textarea from '@/components/Textarea.tsx';
import Button from '@/components/Button.tsx';
import { GetDetailBattleInfoType, PostCommentType } from '@/types/postType.ts';
import { useState } from 'react';
import useInput from '@/hooks/useInput.tsx';
import BattleApi from '@/apis/post.ts';
import { STORAGE_KEYS } from '@/const/Keys.ts';
import toastMessage, { TOAST_MESSAGE } from '@/utils/toastMessage.tsx';
import { useQueryClient } from '@tanstack/react-query';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { flexCenter } from '@/styles/common.style.ts';

interface Props {
  post: GetDetailBattleInfoType;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BattleJoinModal: React.FC<Props> = ({ post, setIsModalOpen }) => {
  /**
   * @description 어떤  옵션을 선택할 건지
   * index [0] : 파란 옵션, 데이터를 보낼떄는 1로 보냅니다.
   * index [1] : 빨간 옵션, 데이터를 보낼떄는 2로 보냅니다.
   * */
  const [option, setOption] = useState<[boolean, boolean]>([false, false]);
  //댓글을 작성하는 함수
  const [values, onChange] = useInput({
    content: '',
  });

  const queryClient = useQueryClient();

  //옵션을 변경하는 함수
  const onClickOption = (optionIndex: number) => {
    setOption(() => {
      const newOption = [false, false];
      newOption[optionIndex] = true;
      return newOption as [boolean, boolean];
    });
  };

  //댓글 제출 함수
  const onSubmitComment = async () => {
    const selectedOption = option[0] ? 1 : 2;
    //유저 정보를 가져옴
    const userInfoJSON = localStorage.getItem(STORAGE_KEYS.USER_INFO)!;
    const userInfo = JSON.parse(userInfoJSON);
    //댓글 객체
    const CommentData: PostCommentType = {
      nickName: userInfo.nickName,
      userId: userInfo.userId,
      profileUrl: userInfo.profileUrl,
      option: selectedOption,
      content: values.content,
      parentId: post.data.id,
    };

    const voteCountUp = {
      blueVoteCount: post.data.data.blueVoteCount,
      redVoteCount: post.data.data.redVoteCount,
      voteTotalCount: post.data.data.voteTotalCount,
    };

    //댓글 작성 성공 여부에 따라 다른 토스트 메세지를 보여줍니다.
    try {
      if (selectedOption === 1) {
        const blueVoteUpResult = Number(voteCountUp.blueVoteCount) + 1;
        const totalVoteUpResult = Number(voteCountUp.voteTotalCount) + 1;
        voteCountUp.blueVoteCount = String(blueVoteUpResult);
        voteCountUp.voteTotalCount = String(totalVoteUpResult);
      } else if (selectedOption === 2) {
        const redVoteUpResult = Number(voteCountUp.redVoteCount) + 1;
        const totalVoteUpResult = Number(voteCountUp.voteTotalCount) + 1;
        voteCountUp.redVoteCount = String(redVoteUpResult);
        voteCountUp.voteTotalCount = String(totalVoteUpResult);
      }
      await BattleApi.postComment(CommentData);
      await BattleApi.patchBattle(voteCountUp, post.data.id);
      toastMessage(true, TOAST_MESSAGE.COMMENT_SUCCESS);
      await queryClient.invalidateQueries({
        queryKey: [BATTLE_QUERY_KEY.COMMENT_LIST],
      });
      await queryClient.invalidateQueries({
        queryKey: [BATTLE_QUERY_KEY.BATTLE_LIST],
      });
      await queryClient.invalidateQueries({
        queryKey: [BATTLE_QUERY_KEY.DETAIL_BATTLE_DATA],
      });
      setIsModalOpen((prev) => !prev);
    } catch {
      setIsModalOpen((prev) => !prev);
      toastMessage(false, TOAST_MESSAGE.COMMENT_ERROR);
    }
  };

  return (
    <form>
      <AlertDialogContent size="large">
        <div className="absolute top-[-50px] left-[0px]">
          <div
            className={`bg-violet rounded-t-xl text-white text-xl font-extrabold text-center pt-[8px] ml-[30px] w-[180px] h-[48px] `}
          >
            배틀 참여하기
          </div>
        </div>
        <div className="flex mt-[30px]">
          <span className="w-[50px] pt-[5px] pl-[10px] font-bold text-textGrey">
            선택
          </span>
          <div className="flex w-[480px] gap-[60px] align-center justify-center">
            {/*파란 옵션*/}
            <div className={`${flexCenter} flex-col gap-[10px]`}>
              <ImageBox
                clickColor={option[0] ? 'blue' : 'none'}
                imgUrl={post.data.dataImage[0].url}
                size="medium"
                imageShape="square"
                onClick={() => onClickOption(0)}
              />
              <span className={`text-blue`}>
                {post.data.data.blueOptionTitle}
              </span>
            </div>
            {/*빨간 옵션*/}
            <div className={`${flexCenter} flex-col gap-[10px]`}>
              <ImageBox
                clickColor={option[1] ? 'red' : 'none'}
                imgUrl={post.data.dataImage[1].url}
                size="medium"
                imageShape="square"
                onClick={() => onClickOption(1)}
              />
              <span className={`text-red`}>
                {post.data.data.redOptionTitle}
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-[30px] ">
          <span className="w-[50px] pt-[5px] font-bold text-textGrey">
            내용
          </span>
          <Textarea
            size={'box'}
            name={'content'}
            onChange={onChange}
            value={values.content}
          />
        </div>
        <div className="absolute top-[20px] right-[20px]">
          <AlertDialogPrimitive.Cancel>
            <DeleteIcon />
          </AlertDialogPrimitive.Cancel>
        </div>
        <AlertDialogFooter>
          <Button
            radius="round"
            fontSize="large"
            bgColor="gray"
            size={'large'}
            onClick={onSubmitComment}
          >
            배틀 참여하기
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </form>
  );
};

export default BattleJoinModal;

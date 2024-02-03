import { timeHelper } from '@/utils/timeHelper.tsx';
import Profile from '../../../assets/image/defaultProfile.png';
import { CommentListType } from '@/types/postType.ts';
import DeleteIcon from '@/assets/DeleteIcon.svg?react';
// import { UseMutationResult, useMutation } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import BattleApi from '@/apis/post';
// import { AxiosResponse } from 'axios';

type Props = {
  comment: CommentListType;
  colorType: 'red' | 'blue';
};

const CommentBox: React.FC<Props> = ({ comment, colorType }) => {
  const { profileUrl, nickName, content } = comment.data; // userId
  const { createdAt } = comment;
  // const navigate = useNavigate();

  const borderColor =
    colorType === 'blue' ? 'border-lineSkyblue' : 'border-linePink';

  // const {
  //   mutateAsync: deleteComment,
  //   // isLoading,
  //   // error,
  // }: UseMutationResult<AxiosResponse<string>, Error, string> = useMutation({
  //   mutationFn: (id: string) => BattleApi.deleteComment(id),
  // });

  // const onDeleteComment = async () => {
  //   try {
  //     await deleteComment(userId);
  //     alert('댓글이 삭제되었습니다.');
  //     navigate('/');
  //   } catch (error) {
  //     console.error('댓글 삭제 실패시 :', error);
  //   }
  // };

  return (
    <div
      className={`relative border-[3px] p-[10px] ${borderColor} rounded-[10px] w-[450px] md:w-[380px] lg:w-[460px]`}
    >
      <div
        // onClick={onDeleteComment}
        className="absolute top-0 right-0 p-[10px]"
      >
        <DeleteIcon />
      </div>
      <div className="flex w-[40px] items-center">
        <img src={profileUrl || Profile} alt="프로필" />
        <div className={'pl-[10px]'}>{nickName}</div>
        <div className="text-commonGrey ml-[10px]">{timeHelper(createdAt)}</div>
      </div>
      <div className="mt-[10px] mr-[3px]">{content}</div>
    </div>
  );
};

export default CommentBox;

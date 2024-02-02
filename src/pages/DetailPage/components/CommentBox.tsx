import { timeHelper } from '@/utils/timeHelper.tsx';
import Profile from '../../../assets/image/defaultProfile.png';
import { CommentListType } from '@/types/postType.ts';
import DeleteIcon from '@/assets/DeleteIcon.svg?react';

type Props = {
  comment: CommentListType;
  colorType: 'red' | 'blue';
};

const CommentBox: React.FC<Props> = ({ comment, colorType }) => {
  const { profileUrl, nickName, content } = comment.data;
  const { createdAt } = comment;

  const borderColor =
    colorType === 'blue' ? 'border-lineSkyblue' : 'border-linePink';

  // const onDeleteIcon = async () => {

  // }

  return (
    <div
      className={`relative border-[3px] p-[10px] ${borderColor} rounded-[10px] w-[450px] md:w-[380px] lg:w-[460px]`}
    >
      <div className="absolute top-0 right-0 p-[10px]">
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

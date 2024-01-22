import { CommentType } from '@/pages/DetailPage/components/CommentList.tsx';
import { timeHelper } from '@/utils/timeHelper.tsx';

type Props = {
  comment: CommentType;
  colorType: 'red' | 'blue';
};

const CommentBox: React.FC<Props> = ({ comment, colorType }) => {
  const { userImgUrl, nickname, content, isMine, createdAt, option } = comment;
  console.log(isMine);
  console.log(option);

  const borderColor =
    colorType === 'blue' ? 'border-lineSkyblue' : 'border-linePink';

  return (
    <div
      className={`w-[450px] border-[3px] p-[10px] ${borderColor} rounded-[10px]`}
    >
      <div className="flex">
        <img src={userImgUrl} alt="프로필" />
        <div>{nickname}</div>
        <div className="text-commonGrey ml-[10px]">{timeHelper(createdAt)}</div>
      </div>
      <div className="mt-[10px] mr-[3px]">{content}</div>
    </div>
  );
};

export default CommentBox;
import { CommentType } from '@/types/postType';
import { timeHelper } from '@/utils/timeHelper.tsx';
import Profile from '../../../../public/defaultProfile.png';

type Props = {
  comment: CommentType;
  colorType: 'red' | 'blue';
};

const CommentBox: React.FC<Props> = ({ comment, colorType }) => {
  const { userInfo, content, createdAt } = comment;
  //
  const borderColor =
    colorType === 'blue' ? 'border-lineSkyblue' : 'border-linePink';

  return (
    <div
      className={`border-[3px] p-[10px] ${borderColor} rounded-[10px] w-[450px] md:w-[380px] lg:w-[460px]`}
    >
      <div className="flex w-[40px] items-center">
        <img src={userInfo.imgUrl || Profile} alt="프로필" />
        <div className={'pl-[10px]'}>{userInfo.nickName}</div>
        <div className="text-commonGrey ml-[10px]">{timeHelper(createdAt)}</div>
      </div>
      <div className="mt-[10px] mr-[3px]">{content}</div>
    </div>
  );
};

export default CommentBox;

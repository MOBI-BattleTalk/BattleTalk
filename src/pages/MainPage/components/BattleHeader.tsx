import ImageBox from '@/components/ImageBox.tsx';
import DefaultImg from '../../../../public/defaultProfile.png';
import { timeHelper } from '@/utils/timeHelper.tsx';

interface Props {
  nickName: string;
  profileUrl: string;
  totalCount: string;
  createdAt: string;
}

const BattleHeader: React.FC<Props> = ({
  nickName,
  profileUrl,
  totalCount,
  createdAt,
}) => {
  return (
    <div className="flex justify-between pt-[10px]">
      <div className="flex items-center justify-start gap-[10px] pl-[20px]">
        <ImageBox
          imgUrl={profileUrl || DefaultImg}
          size={'tiny'}
          imageShape={'rounded'}
          clickColor="none"
        />
        <div>{nickName}</div>
        <div className="text-commonGrey">{timeHelper(createdAt)}</div>
      </div>
      <div className="flex text-darkGrey items-center justify-start gap-[10px] pr-[20px]">
        <span>{totalCount}명 참여</span>
      </div>
    </div>
  );
};

export default BattleHeader;

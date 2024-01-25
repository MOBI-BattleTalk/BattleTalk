import { CommentType } from '@/types/userType';
import CommentBox from '@/pages/DetailPage/components/CommentBox.tsx';

interface Props {
  commentList: CommentType[];
  colorType: 'red' | 'blue';
}

const ColorCommentList: React.FC<Props> = ({ colorType, commentList }) => {
  const commentLength = commentList.length;
  const textColor = colorType === 'red' ? 'text-red' : 'text-blue';

  return (
    <div className="flex gap-[20px] flex-col ">
      <div className={`${textColor}`}>댓글 {commentLength}개</div>
      {commentList.map((comment) => {
        return <CommentBox comment={comment} colorType={colorType} />;
      })}
    </div>
  );
};
export default ColorCommentList;

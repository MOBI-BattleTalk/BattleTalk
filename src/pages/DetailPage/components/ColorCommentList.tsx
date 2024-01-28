import CommentBox from '@/pages/DetailPage/components/CommentBox.tsx';
import { CommentListType } from '@/types/postType';

interface Props {
  commentList: CommentListType[];
  colorType: 'red' | 'blue';
}

const ColorCommentList: React.FC<Props> = ({ colorType, commentList }) => {
  const commentLength = commentList.length;
  const textColor = colorType === 'red' ? 'text-red' : 'text-blue';

  return (
    <div className="flex gap-[20px] flex-col">
      <div className={`${textColor}`}>댓글 {commentLength}개</div>
      {commentList.map((comment, idx) => {
        return <CommentBox key={idx} comment={comment} colorType={colorType} />;
      })}
    </div>
  );
};
export default ColorCommentList;

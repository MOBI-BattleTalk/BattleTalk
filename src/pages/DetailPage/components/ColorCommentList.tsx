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
      {commentLength ? (
        <div>
          <div className={`${textColor}`}>댓글 {commentLength}개</div>
          {commentList.map((comment, idx) => {
            return (
              <CommentBox key={idx} comment={comment} colorType={colorType} />
            );
          })}
        </div>
      ) : (
        <div>
          <div className={`${textColor}`}>댓글 {commentLength}개</div>
          <div className={'w-[460px] h-[100px] pt-[20px]'}>
            이 선택지에 아직 댓글이 없습니다.
          </div>
        </div>
      )}
    </div>
  );
};
export default ColorCommentList;

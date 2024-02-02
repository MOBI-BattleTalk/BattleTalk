import ColorCommentList from '@/pages/DetailPage/components/ColorCommentList.tsx';
import { GetCommentArrType } from '@/types/postType';

type CommentListProps = {
  postCommentListArr: GetCommentArrType[];
  battlePostId: string | undefined;
};

const CommentList: React.FC<CommentListProps> = ({ postCommentListArr }) => {
  // 어떤 옵션을 선택했는지 각각 나눕니다.
  const blueData = postCommentListArr.filter(
    (comment) => comment.data.option === 1,
  );
  const redData = postCommentListArr.filter(
    (comment) => comment.data.option === 2,
  );

  return (
    <div className="flex-col items-center md:flex-row flex w-[600px] gap-[20px] flex-wrap md:justify-between mt-[20px] pb-[30px] md:w-[800px] lg:w-[1000px] justify-center">
      <ColorCommentList commentList={blueData} colorType="blue" />
      <ColorCommentList commentList={redData} colorType="red" />
    </div>
  );
};

export default CommentList;

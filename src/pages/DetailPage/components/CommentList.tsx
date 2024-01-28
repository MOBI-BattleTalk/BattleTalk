import ColorCommentList from '@/pages/DetailPage/components/ColorCommentList.tsx';
import { GetCommentType } from '@/types/postType';

type CommentListProps = {
  commentList: GetCommentType;
  battlePostId: string | undefined;
};

const CommentList: React.FC<CommentListProps> = ({
  commentList,
  battlePostId,
}) => {
  // 데이터가 객체로 오기때문에 배열로 변경 시켜주었습니다.
  const commentListArr = Object.values(commentList).slice(0, -1);

  // 현재 상세페이지에 있는 post에 댓글만 filter 합니다.
  const currentCommentList = commentListArr.filter((postId) => {
    return postId.data.parentId === battlePostId;
  });

  // 어떤 옵션을 선택했는지 각각 나눕니다.
  const blueData = currentCommentList.filter(
    (comment) => comment.data.option === 1,
  );
  const redData = currentCommentList.filter(
    (comment) => comment.data.option === 2,
  );

  return (
    <div className="flex w-[600px] gap-[20px] flex-wrap md:justify-between mt-[20px] pb-[30px] md:w-[800px] lg:w-[1000px] justify-center">
      <ColorCommentList commentList={blueData} colorType="blue" />
      <ColorCommentList commentList={redData} colorType="red" />
    </div>
  );
};

export default CommentList;

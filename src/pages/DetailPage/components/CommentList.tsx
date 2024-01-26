import ColorCommentList from '@/pages/DetailPage/components/ColorCommentList.tsx';
import { commentMock } from '@/mock/commentMock.ts';

const blueData = commentMock.filter((comment) => comment.option === 1);
const redData = commentMock.filter((comment) => comment.option === 2);
const CommentList = () => {
  return (
    <div className="flex w-[600px] gap-[20px] flex-wrap md:justify-between mt-[20px] pb-[30px] md:w-[800px] lg:w-[1000px] justify-center">
      <ColorCommentList commentList={blueData} colorType="blue" />
      <ColorCommentList commentList={redData} colorType="red" />
    </div>
  );
};

export default CommentList;

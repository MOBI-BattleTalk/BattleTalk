import { AlertCommentModal } from '@/components/CommentModal';
import { Input } from '@/components/ui/input';

const ModalPage = () => {
  const content1 =
    '배틀에 참가하시려면 로그인이 필요합니다.\n 로그인 페이지로 이동하시겠습니까?';
  return (
    <div>
      <div>ㅁㄴㅇㄹ /n ㅁㄴㅇㄹ</div>
      <AlertCommentModal
        title="배틀 참가하기"
        content={content1}
        modalType="confirm"
      />
      <AlertCommentModal
        title="댓글 작성하기"
        content="댓글을 작성하시려면 로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?"
        modalType="confirm"
      />
      <AlertCommentModal
        title="배틀 참여하기"
        content="이미 참가한 배틀입니다!"
        modalType="alert"
      />
      <AlertCommentModal
        title="배틀 삭제하기"
        content="배틀을 삭제하시겠습니까?"
        modalType="delete"
      />
      <AlertCommentModal
        title="댓글 삭제하기"
        content="댓글을 삭제하시겠습니까?"
        modalType="delete"
      />
      <Input />
    </div>
  );
};

export default ModalPage;

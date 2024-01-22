import { BasicModal } from '@/components/CommentModal';
import { Input } from '@/components/ui/input';
import { MODAL } from '@/const/ModalMessage';

const ModalPage = () => {
  return (
    <div>
      <div>:)</div>
      <BasicModal
        title={MODAL.CONFIRM_BATTLE.title}
        content={MODAL.CONFIRM_BATTLE.content}
        modalType="confirm"
      />
      <BasicModal
        title={MODAL.CONFIRM_COMMENT.title}
        content={MODAL.CONFIRM_COMMENT.content}
        modalType="confirm"
      />
      <BasicModal
        title={MODAL.ALERT_BATTLE.title}
        content={MODAL.ALERT_BATTLE.content}
        modalType="alert"
      />
      <BasicModal
        title={MODAL.DELETE_BATTLE.title}
        content={MODAL.DELETE_BATTLE.content}
        modalType="delete"
      />
      <BasicModal
        title={MODAL.DELETE_COMMENT.title}
        content={MODAL.DELETE_COMMENT.content}
        modalType="delete"
      />
      <Input />
    </div>
  );
};

export default ModalPage;

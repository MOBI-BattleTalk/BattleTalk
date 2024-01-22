import { BasicModal } from '@/components/BasicModal.tsx';
import { Input } from '@/components/ui/input';
import { MODAL } from '@/const/ModalMessage';

const ModalPage = () => {
  const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
  const modalProps2 = MODAL.CONFIRM_BATTLE_JOIN;
  const modalProps3 = MODAL.CONFIRM_BATTLE_JOIN;
  const modalProps4 = MODAL.CONFIRM_BATTLE_JOIN;
  const modalProps5 = MODAL.CONFIRM_BATTLE_JOIN;
  return (
    <div>
      <BasicModal {...modalProps1} />
      <BasicModal {...modalProps2} />
      <BasicModal {...modalProps3} />
      <BasicModal {...modalProps4} />
      <BasicModal {...modalProps5} />
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

import { BasicModal } from '@/components/BasicModal.tsx';
import ImageBox from '@/components/ImageBox';
import { BattleEnterModal, ImageModal } from '@/components/ImageModal';
import Input from '@/components/Input';
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
      <ImageModal />
      <BattleEnterModal />
      <div>
        <Input size="title" />
        <Input size="content" />
      </div>
      <div>
        <ImageBox imgUrl="" size="tiny" imageShape="square" />
        <ImageBox imgUrl="" size="tiny" imageShape="rounded" />
        <ImageBox imgUrl="" size="smallest" imageShape="square" />
        <ImageBox imgUrl="" size="smallest" imageShape="rounded" />
        <ImageBox imgUrl="" size="small" imageShape="square" />
        <ImageBox imgUrl="" size="small" imageShape="rounded" />
        <ImageBox imgUrl="" size="medium" imageShape="square" />
        <ImageBox imgUrl="" size="medium" imageShape="rounded" />
        <ImageBox imgUrl="" size="large" imageShape="square" />
        <ImageBox imgUrl="" size="large" imageShape="rounded" />
        <ImageBox imgUrl="" size="big" imageShape="square" />
        <ImageBox imgUrl="" size="big" imageShape="rounded" />
      </div>
    </div>
  );
};

export default ModalPage;

import { BasicModal } from '@/components/CommentModal';
import ImgUploader from '@/components/Image';

import Input from '@/components/Input';
import { MODAL } from '@/const/ModalMessage';

const ModalPage = () => {
  return (
    <div>
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
      <div>
        <Input size="title" />
        <Input size="content" />
      </div>
      <div>
        <ImgUploader size="small" imageShape="square" />
        <ImgUploader size="small" imageShape="rounded" />
        <ImgUploader size="medium" imageShape="square" />
        <ImgUploader size="medium" imageShape="rounded" />
        <ImgUploader size="large" imageShape="square" />
        <ImgUploader size="large" imageShape="rounded" />
      </div>
    </div>
  );
};

export default ModalPage;

import Input from '@/components/Input';
import { MODAL } from '@/const/ModalMessage';
import {
  AlertDialog,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import BasicModal from '@/components/BasicModal.tsx';

const ModalPage = () => {
  const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
  //const modalProps2 = MODAL.CONFIRM_BATTLE_JOIN;
  // const modalProps3 = MODAL.CONFIRM_BATTLE_JOIN;
  // const modalProps4 = MODAL.CONFIRM_BATTLE_JOIN;
  // const modalProps5 = MODAL.CONFIRM_BATTLE_JOIN;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">버튼</Button>
      </AlertDialogTrigger>
      <BasicModal {...modalProps1} />
      {/*<BasicModal {...modalProps2} />*/}
      {/*<BasicModal {...modalProps3} />*/}
      {/*<BasicModal {...modalProps4} />*/}
      {/*<BasicModal {...modalProps5} />*/}
      {/*<BasicModal*/}
      {/*  title={MODAL.DELETE_COMMENT.title}*/}
      {/*  content={MODAL.DELETE_COMMENT.content}*/}
      {/*  modalType="delete"*/}
      {/*/>*/}
      {/*<ImageModal />*/}
      {/*<BattleEnterModal />*/}
      <div>
        <Input size="small" />
        <Input size="medium" />
      </div>
    </AlertDialog>
  );
};

export default ModalPage;

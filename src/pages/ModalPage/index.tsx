import { MODAL } from '@/const/ModalMessage';
import {
  AlertDialog,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import BasicModal from '@/components/BasicModal.tsx';

const ModalPage = () => {
  const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">버튼</Button>
      </AlertDialogTrigger>
      <BasicModal {...modalProps1} func={() => {}} />
    </AlertDialog>
  );
};

export default ModalPage;

import Input from '@/components/Input';
import { MODAL } from '@/const/ModalMessage';
import {
  AlertDialog,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import BasicModal from '@/components/BasicModal.tsx';
import ProfileModal from '@/components/ProfileModal.tsx';
import BattleEnterModal from '@/components/BattleEnterModal.tsx';

const ModalPage = () => {
  const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
  const modalProps2 = MODAL.ALERT_BATTLE_UPLOAD;
  const modalProps3 = MODAL.CONFIRM_BATTLE_JOIN;
  const modalProps4 = MODAL.CONFIRM_BATTLE_JOIN;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">버튼</Button>
      </AlertDialogTrigger>
      <BasicModal
        {...modalProps1}
        func={() => {
          console.log('aa');
        }}
      />
      <BasicModal
        {...modalProps2}
        func={() => {
          console.log('aa');
        }}
      />
      <BasicModal
        {...modalProps3}
        func={() => {
          console.log('aa');
        }}
      />
      <BasicModal
        {...modalProps4}
        func={() => {
          console.log('aa');
        }}
      />
      <ProfileModal />
      <BattleEnterModal />
      <div>
        <Input size="small" />
        <Input size="medium" />
      </div>
    </AlertDialog>
  );
};

export default ModalPage;

import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react'; /*
 * 사용방법
 * 1. 모달 상수에서 원하는 메세지를 꺼낸다.
 *   const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
 *
 * 2. 모달에 props를 전개연산자로 전달합니다.
 *       <BasicModal {...modalProps1} />
 * */

/*
 * 사용방법
 * 1. 모달 상수에서 원하는 메세지를 꺼낸다.
 *   const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
 *
 * 2. 모달에 props를 전개연산자로 전달합니다.
 *       <BasicModal {...modalProps1} />
 * */

export type ModalType = 'confirm' | 'alert' | 'delete';

type ModalProps =
  | {
      content: string; // 내용을 위한 prop
      modalType: 'confirm' | 'delete'; // confirm 타입만 선택하도록 함
      func: () => void; // confirm 타입일 때는 필수로 func을 지정
    }
  | {
      content: string; // 내용을 위한 prop
      modalType: 'alert';
      func?: () => void;
    };

const BasicModal: React.FC<ModalProps> = ({
  content,
  modalType,
  func,
}: ModalProps) => {
  return (
    <AlertDialogContent size="small">
      <div className="position absolute top-[20px] right-[20px]">
        <AlertDialogPrimitive.Cancel>
          <DeleteIcon />
        </AlertDialogPrimitive.Cancel>
      </div>
      <AlertDialogHeader>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription>{content}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        {modalType === 'confirm' && (
          <div className="flex gap-[20px]">
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={func}>이동</AlertDialogAction>
          </div>
        )}
        {modalType === 'delete' && (
          <div className="flex gap-[20px]">
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={func}>삭제</AlertDialogAction>
          </div>
        )}
        {modalType === 'alert' && <AlertDialogAction>확인</AlertDialogAction>}
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default BasicModal;

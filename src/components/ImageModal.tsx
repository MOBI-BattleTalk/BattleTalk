import {AlertDialogAction, AlertDialogContent, AlertDialogFooter,} from '@/components/ui/alert-dialog';
import ImageBox from './ImageBox';
import Input from './Input';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';

//shadcn/ui에서 제공하는 Modal을 컴포넌트화 시켰습니다.

/*
 * 사용방법
 * 1. 모달 상수에서 원하는 메세지를 꺼낸다.
 *   const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
 *
 * 2. 모달에 props를 전개연산자로 전달합니다.
 *       <BasicModal {...modalProps1} />
 * */

const ImageModal = () => {
  return (
    // <AlertDialog>
    //   <AlertDialogTrigger asChild>
    //     <Button variant="outline">프로필 등록하기</Button>
    //   </AlertDialogTrigger>
    <AlertDialogContent size="large">
      <ImageBox imgUrl="" size="big" imageShape="rounded" />
      <Input size="small" />
      <div className="absolute top-[20px] right-[20px]">
        <DeleteIcon />
      </div>
      <AlertDialogFooter>
        <AlertDialogAction size="large">확인</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
    // </AlertDialog>
  );
};

export default ImageModal;

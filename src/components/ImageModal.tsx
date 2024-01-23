import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import ImageBox from './ImageBox';
import Input from './Input';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const ImageModal = () => {
  return (
    <AlertDialog>
      {/*버튼*/}
      <AlertDialogTrigger asChild>
        <Button variant="outline">프로필 등록하기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="large">
        <ImageBox imgUrl="" size="big" imageShape="rounded" />
        <Input size="small" />
        <div className="absolute top-[20px] right-[20px]">
          <AlertDialogPrimitive.Cancel>
            <DeleteIcon />
          </AlertDialogPrimitive.Cancel>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction size="large">확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ImageModal;

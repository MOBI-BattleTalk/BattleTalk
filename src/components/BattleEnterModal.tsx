import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import Input from '@/components/Input.tsx';

const BattleEnterModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">배틀 참여하기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="large">
        <div className="flex w-[400px] justify-between">
          <ImageBox imgUrl="" size="small" imageShape="square" />
          <ImageBox imgUrl="" size="small" imageShape="square" />
        </div>
        <Input size="box" />
        <AlertDialogFooter>
          <AlertDialogAction size="large">확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BattleEnterModal;

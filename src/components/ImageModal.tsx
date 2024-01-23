import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button'; //shadcn/ui에서 제공하는 Modal을 컴포넌트화 시켰습니다.
import ImageBox from './ImageBox';
import Input from './Input';
//shadcn/ui에서 제공하는 Modal을 컴포넌트화 시켰습니다.

/*
 * 사용방법
 * 1. 모달 상수에서 원하는 메세지를 꺼낸다.
 *   const modalProps1 = MODAL.CONFIRM_BATTLE_JOIN;
 *
 * 2. 모달에 props를 전개연산자로 전달합니다.
 *       <BasicModal {...modalProps1} />
 * */

export function ImageModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">프로필 등록하기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="large">
        <ImageBox imgUrl="" size="big" imageShape="rounded" />
        <Input size="title" />
        <AlertDialogFooter>
          <AlertDialogAction size="large">확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function BattleEnterModal() {
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
}

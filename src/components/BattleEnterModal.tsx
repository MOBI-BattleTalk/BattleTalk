import {
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import Textarea from '@/components/Textarea.tsx';
import Button from '@/components/Button.tsx';

const BattleEnterModal = () => {
  return (
    <>
      <AlertDialogContent size="large">
        <div className="absolute top-[-50px] left-[0px]">
          <div
            className={`bg-violet rounded-t-xl text-white text-xl font-extrabold text-center pt-[8px] ml-[30px] w-[180px] h-[48px] `}
          >
            배틀 참여하기
          </div>
        </div>
        <div className="flex mt-[30px]">
          <span className="w-[50px] pt-[5px] pl-[10px] font-bold text-textGrey">
            선택
          </span>
          <div className="flex w-[480px] gap-[60px] align-center justify-center">
            <ImageBox imgUrl="" size="medium" imageShape="square" />
            <ImageBox imgUrl="" size="medium" imageShape="square" />
          </div>
        </div>
        <div className="flex mt-[30px] ">
          <span className="w-[50px] pt-[5px] font-bold text-textGrey">
            내용
          </span>
          <Textarea size={'box'} />
        </div>
        <div className="absolute top-[20px] right-[20px]">
          <AlertDialogPrimitive.Cancel>
            <DeleteIcon />
          </AlertDialogPrimitive.Cancel>
        </div>
        <AlertDialogFooter>
          <Button radius="round" fontSize="large" bgColor="gray" size={'large'}>
            배틀 참여하기
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  );
};

export default BattleEnterModal;

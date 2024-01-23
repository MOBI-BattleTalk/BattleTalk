import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Button from '@/components/Button.tsx';
import ImageBox from './ImageBox';
import Input from './Input';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const ProfileModal = () => {
  return (
    <AlertDialog>
      {/*버튼*/}
      <AlertDialogTrigger asChild>
        <button>프로필 등록하기</button>
      </AlertDialogTrigger>

      <AlertDialogContent size="medium">
        <div className="absolute top-[-50px] left-[0px]">
          <div
            className={`bg-violet rounded-t-xl text-white text-xl font-extrabold text-center pt-[8px] ml-[30px] w-[180px] h-[48px] `}
          >
            프로필 수정
          </div>
        </div>
        <ImageBox imgUrl="" size="big" imageShape="rounded" />
        <div className="flex items-center gap-[20px]">
          <label>닉네임</label>
          <Input size="smallMedi" />
        </div>
        <div className="absolute top-[20px] right-[20px]">
          <AlertDialogPrimitive.Cancel>
            <DeleteIcon />
          </AlertDialogPrimitive.Cancel>
        </div>
        <AlertDialogFooter>
          <Button
            bgColor="gray"
            size={'medium'}
            fontSize={'medium'}
            radius={'round'}
          >
            프로필 수정
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProfileModal;

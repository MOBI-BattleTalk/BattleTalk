import {
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import Button from '@/components/Button.tsx';
import ImageBox from './ImageBox';
import Input from './Input';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import CharaterCounter from '@/components/CharaterCounter.tsx';
import useInput from '@/hooks/useInput.tsx';
import { useRef, useState } from 'react';

const ProfileModal = () => {
  const oldProfileImg = sessionStorage.getItem('profileUrl');
  const oldNickname = sessionStorage.getItem('nickName');
  const [value, onChangeNickname] = useInput({
    nickname: oldNickname ? oldNickname : '',
  });
  const [image, setProfileImage] = useState<string | null>(oldProfileImg);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChanges = () => {
    if (inputRef.current !== null && inputRef.current.files !== null) {
      const file = inputRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
    }
  };

  return (
    <AlertDialogContent size="medium">
      <div className="absolute top-[-50px] left-[0px]">
        <div
          className={`bg-violet rounded-t-xl text-white text-xl font-extrabold text-center pt-[8px] ml-[30px] w-[180px] h-[48px]`}
        >
          프로필 수정
        </div>
      </div>
      {/*숨겨진 인풋*/}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFileChanges}
      />
      {/*프로필 이미지 박스*/}
      <div className="pt-[30px]">
        <ImageBox
          onClick={() => inputRef.current?.click()}
          imgUrl={
            oldProfileImg
              ? oldProfileImg
              : image
                ? image
                : '../../public/defaultProfile.png'
          }
          size="big"
          imageShape="rounded"
        />
      </div>
      <input type="" />
      <div className="flex items-center gap-[20px]">
        <label>닉네임</label>
        <div className="flex items-center gap-[10px]">
          <Input
            size="smallMedi"
            isValueLengthCounter={false}
            value={value.nickname}
            name="nickname"
            onChange={onChangeNickname}
          />
          <CharaterCounter currentNum={value.nickname.length} maxNum={20} />
        </div>
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
  );
};

export default ProfileModal;

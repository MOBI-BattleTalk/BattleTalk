import {
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import Button from '@/components/Button.tsx';
// import ImageBox from './ImageBox';
import Input from './Input';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
// import CharaterCounter from '@/components/CharaterCounter.tsx';
import useInput from '@/hooks/useInput.tsx';
import { FormEvent, useRef, useState } from 'react';
import AuthApi from '@/apis/auth';
import LocalStorage from '@/utils/localStorage';
import { STORAGE_KEYS } from '@/const/Keys';
import defaultImage from '../assets/image/defaultProfile.png';
import ImageBox from './ImageBox';
import { flexCenter } from '@/styles/common.style';
import CharacterCounter from './CharaterCounter';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/atom/user';
import toastMessage from '@/utils/toastMessage';

const ProfileModal = () => {
  // 기존에 저장되어 있는 프로필 이미지와 닉네임을 불러옵니다.
  const userInfoJSON = localStorage.getItem(STORAGE_KEYS.USER_INFO);
  const userInfo = JSON.parse(userInfoJSON!);
  const setUserInfo = useSetRecoilState(userInfoAtom);

  const [{ newNickName }, onChangeNickname] = useInput({
    newNickName: '',
  });

  // 프로필 이미지를 업로드 하기 위한 state입니다. 기존의 값이 있으면 oldProfileImg=string을, 없으면 ""=null을 반환합니다.
  const [profileImage, setProfileImage] = useState<string | null>(
    userInfo ? userInfo.profileUrl : null,
  );
  // inputref를 사용해 input요소에 직접 접근합니다.
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChanges = () => {
    // 현재 input에 데이터가 있고, 파일도 있다면
    if (inputRef.current !== null && inputRef.current.files !== null) {
      // 사용자가 업로드한 파일 중 첫번째 파일 = const file에 저장합니다.
      const file = inputRef.current.files[0];
      // 파일을 읽을수 있게 해주는 API
      const reader = new FileReader();
      // 파일을 읽어서 base64로 인코딩합니다.
      reader.readAsDataURL(file);
      // 파일 읽기 작업이 완료되면 실행될 콜백 함수입니다.
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
    }
  };

  const onChangeUserNickName = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { profileUrl, userId } = LocalStorage.getItem(STORAGE_KEYS.USER_INFO);

    try {
      await AuthApi.patchUserNickName(newNickName);
      LocalStorage.setItem(
        STORAGE_KEYS.USER_INFO,
        JSON.stringify({
          nickName: newNickName,
          profileUrl,
          userId,
        }),
      );

      setUserInfo((prev) => ({
        ...prev,
        nickName: newNickName,
      }));

      /**@TODO  */
      toastMessage.changeNicknameSuccessNotify();
    } catch {
      toastMessage.changeNicknameFailureNotify();
    }
  };

  return (
    <AlertDialogContent size="medium">
      <form onSubmit={onChangeUserNickName}>
        <div className="absolute top-[-50px] left-[0px]">
          <div
            className={`bg-violet rounded-t-xl text-white text-xl font-extrabold text-center pt-[8px] ml-[30px] w-[180px] h-[48px] `}
          >
            프로필 수정
          </div>
        </div>
        {/*숨겨진 인풋*/}
        <input
          name="profile"
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChanges}
        />
        {/* 프로필 이미지 박스*/}
        <div className={`pb-[30px] pt-[40px] ${flexCenter}`}>
          <ImageBox
            clickColor={'none'}
            onClick={() => inputRef.current?.click()}
            imgUrl={profileImage ? profileImage : defaultImage}
            size="big"
            imageShape="rounded"
          />
        </div>
        <input type="" />
        <div className="flex items-center gap-[20px] pt-[30px]">
          <label>닉네임</label>
          <div className="flex items-center gap-[10px]">
            <Input
              size="smallMedi"
              isValueLengthCounter={false}
              name="newNickName"
              value={newNickName}
              maxLength={19}
              onChange={onChangeNickname}
            />
            <CharacterCounter currentNum={newNickName.length} maxNum={20} />
          </div>
        </div>
        <div className="absolute top-[20px] right-[20px]">
          <AlertDialogPrimitive.Cancel>
            <DeleteIcon />
          </AlertDialogPrimitive.Cancel>
        </div>
        <div className={`pt-[40px]`}>
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
        </div>
      </form>
    </AlertDialogContent>
  );
};

export default ProfileModal;

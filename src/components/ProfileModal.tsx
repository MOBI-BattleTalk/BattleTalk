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
import defaultImage from '../../public/defaultProfile.png';
import ImageBox from './ImageBox';
import { flexCenter } from '@/styles/common.style';
import CharacterCounter from './CharaterCounter';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/atom/user';
import toastMessage from '@/utils/toastMessage';
/*
요구 사항 (유저 닉네임 변경 기능)
1. 헤더에서 프로필 변경 버튼을 눌렀을 때 프로필 모달 뜸
2. 프로필 모달에서 input안에 유저가 새로운 닉네임을 적고 변경 버튼을 누르면 닉네임이 변경 될 것(백엔드).
3. 변경된 닉네임이 변경 버튼을 누르는 즉시 적용 될 것.(클라이언트)

- input 값
- 닉네임 변경 백엔드 요청 함수
- 현재 화면에서 닉네임을 보여주는 형식이 -> 로그인 할 때 로컬스토리지에 유저 닉네임을 저장하고
 -> 로컬스토리지에서 해당 닉네임을 가져와서 헤더 컴포넌트에서 닉네임 보여줌.
- 로컬스토리지 저장되어 있는 유저 닉네임을 현재 유저가 입력한 input값(새로운 닉네임)으로 변경 할 것.
- 로컬스토리지가 변경 되자마자 헤더에 유저 정보 바로 바뀌게 하기
- 닉네임 변경 성공 여부에 따른 토스트 메세지 보여주기

조건 (예외 처리)
- 닉네임 변경 백엔드 요청 함수 실패시 로컬스토리지에 유저 닉네임이 input값으로 바뀌면 안됨. -> try,catch문으로 백엔드 요청이 성공 할때만 로컬스토리지 저장 로직이 실행되게 해야겠다
*/

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

  /** 
   * @description
    닉네임 변경 요청이 성공되면 바로 헤더에 있는 유저 정보가 바뀌고 싶다.
    -> 헤더에서 useState로 닉네임을 랜더링 하게 바꾸기
    -> useEffect로 로컬스토리지 값이 바뀌면 useEffect안에서 setState로 닉네임 새로운 로컬스토리지 닉네임으로 바꾸기
    -> 그럴려면 useState가 전역으로 사용 할 수 있어야 함.
    -> 전역 상태관리 라이브러리 recoil 사용하기
  */

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
      // 토스트 메세지로 변경 예정입니다.
      alert('닉네임 변경 실패');
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

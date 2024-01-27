import {
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import Button from '@/components/Button.tsx';
// import ImageBox from './ImageBox';
import Input from './Input';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import CharaterCounter from '@/components/CharaterCounter.tsx';
import useInput from '@/hooks/useInput.tsx';
import { FormEvent, useRef, useState } from 'react';
import AuthApi from '@/apis/auth';
import LocalStorage from '@/utils/localStorage';
import { STORAGE_KEYS } from '@/const/Keys';
import defaultImage from '../../public/defaultProfile.png';
import ImageBox from './ImageBox';
import { flexCenter } from '@/styles/common.style';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/apis/core';
import { useDispatch } from 'react-redux';

const ProfileModal = () => {
  // 기존에 저장되어 있는 프로필 이미지와 닉네임을 불러옵니다.
  const userInfoJSON = localStorage.getItem(STORAGE_KEYS.USER_INFO);
  const userInfo = JSON.parse(userInfoJSON!);
  const dispatch = useDispatch();
  // dispatch 액션
  const UPDATE_NICKNAME = 'refresh/UPDATE_NICKNAME';
  // 액션함수 생성
  const refreshnickName = (updatenickName: string) => ({
    type: UPDATE_NICKNAME,
    updatenickName,
  });
  //초기값
  const initialState = {
    nickName: '',
  };
  // 리덕스 스토어값 변경
  const NickName = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NICKNAME:
        return {
          ...state,
          nickName: action.updatenickName,
        };
      default:
        return state;
    }
  };

  const [value, onChangeNickname] = useInput({
    nickName: userInfo ? userInfo.nickName : '',
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

  const onPostUpdateInfo = async (
    event: FormEvent<HTMLFormElement> & {
      target: {
        nickName: HTMLInputElement;
        profile: HTMLInputElement;
      };
    },
  ) => {
    event.preventDefault();
    // console.log(event.target.profile.files![0]);
    //formData 생성 (이미지가 들어갈 수 있는 데이터 형식)
    // const formData = new FormData();
    //formData에 이미지 추가
    // if (event.target.profile.files![0]) {
    //   console.log('이미지 들어감');
    //   formData.append('image', event.target.profile.files![0]);
    // } else {
    //   console.log('이미지 안들어감');
    //   formData.append('image', '');
    // }
    // console.log(event.target.profile.files![0]);
    const updateInfoRes = await AuthApi.patchUserNickName({
      nickName: event.target.nickName.value,
    });
    console.log(updateInfoRes);

    userInfo.nickName = event.target.nickName.value;
    //userInfo 를 다시 stirngfy 해서 넣기
    //닉네임만 수정
    //JSON.stringfy(data)
    LocalStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(userInfo));
    console.log('바뀐 유저 데이터', JSON.stringify(userInfo));

    // const updateProfile = await AuthApi.patchUpdateProfile(formData);
    // console.log(updateProfile);
  };

  // const onPatchUpdateProfile = async (
  //   event: FormEvent<HTMLFormElement> & {
  //     target: {
  //       profile: HTMLInputElement;
  //     };
  //   },
  // ) => {
  //   event.preventDefault();
  //   console.log(event);
  //   return await AuthApi.patchUpdateProfile({
  //     profileUrl: event.target.profile.value,
  //   });
  // };

  //   const emailElement = e.currentTarget.elements.namedItem('email') as HTMLInputElement
  // console.log(emailElement.value)

  // 바뀐 유저 데이터 실시간으로 변경하기
  // 필요한거 react-query,invalidateQueries,useQuery,useMutation

  // useQueryClient는 쿼리를 캐시하고 쿼리를 업데이트하는 데 사용할 수 있는 여러 가지 메서드를 제공
  const qureyClient = useQueryClient();
  // useMutation은 쿼리를 업데이트하는 데 사용할 수 있는 여러 가지 메서드를 제공
  const { mutateAsync } = useMutation({
    // mutationFn = 실제 서버함수를 호출하는 함수
    mutationFn: axiosInstance,
    // 일단 데이터를 수정하고 나서 서버에서 데이터를 받아오는 함수
    onMutate: () => {
      // dispatch란 액션을 발생시키는 함수
      dispatch(refreshnickName(value.nickName));
      console.log('mutate');
      qureyClient.setQueryData(['????', null], (nickName: { data: string }) => [
        ...nickName.data,
        nickName,
      ]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  // usestate로 이름 변경 -> 변경 상태 -> onMutate 안에 dispatch로 변경 -> 실패했을시 이전 이름값을 저장해뒀다가 다시 복구.
  // form에 넣어야 되는 데이터
  // async (e) => {
  //   e.preventDefault();
  //   await mutateAsync({
  //     title: "test",
  //     content: "test",
  //   });
  // }
  //   //   qureyClient.invalidateQueries(["todo", null]);
  return (
    <AlertDialogContent size="medium">
      <form
        onSubmit={async (onPostUpdateInfo) => {
          onPostUpdateInfo.preventDefault();
          await mutateAsync('nickName');
          //   qureyClient.invalidateQueries(["todo", null]);
        }}
      >
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
              value={value.nickName}
              name="nickName"
              onChange={onChangeNickname}
            />
            <CharaterCounter currentNum={value.nickName.length} maxNum={20} />
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

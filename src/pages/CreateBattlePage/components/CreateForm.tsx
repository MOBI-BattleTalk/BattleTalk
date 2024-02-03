import { flexCenter } from '@/styles/common.style';
import { useState } from 'react';
import { Category } from '@/types/postType';
import Button from '@/components/Button';
import BattleTopic from './BattleTopic';
import BattleOption from './BattleOption';
import useInput from '@/hooks/useInput';
import useGetInputFile from '@/hooks/useGetInputFile';
import LocalStorage from '@/utils/localStorage';
import BattleApi from '@/apis/post';
import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { MODAL } from '@/const/ModalMessage';
import BasicModal from '@/components/BasicModal';
import { useNavigate } from 'react-router-dom';
import { END_POINTS } from '@/const/EndPoint';
import BattleCategory from '@/pages/CreateBattlePage/components/Category.tsx';

const CreateForm: React.FC = () => {
  const navigate = useNavigate();
  const [categoryValue, setCategoryValue] = useState<Category>(Category.all);

  // 유저가 작성한 주제, 내용, 옵션1제목, 옵션2제목
  const [
    { title, content, blueOptionTitle, redOptionTitle },
    onCreateBattleFormValueChange,
  ] = useInput({
    title: '',
    content: '',
    blueOptionTitle: '',
    redOptionTitle: '',
  });

  // 유저가 올린 옵션1사진, 옵션2사진
  const [{ blueOptionImg }, onBlueImgChange] = useGetInputFile({
    blueOptionImg: undefined,
  });

  const [{ redOptionImg }, onRedImgChange] = useGetInputFile({
    redOptionImg: undefined,
  });

  // 배틀 생성 api 요청 함수
  const onCreateBattle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { nickName, userId, profileUrl } = LocalStorage.getItem('userInfo');
    const fileArr = [blueOptionImg, redOptionImg];
    const formData = new FormData();

    formData.append('nickName', nickName);
    formData.append('userId', userId);
    if (profileUrl) {
      formData.append('profileUrl', profileUrl);
    } else {
      formData.append('profileUrl', '');
    }
    formData.append('title', title);
    formData.append('content', content);
    formData.append('blueOptionTitle', blueOptionTitle);
    formData.append('redOptionTitle', redOptionTitle);

    for (const file of fileArr) {
      if (!file) return;
      formData.append('file', file);
    }
    formData.append('category', categoryValue);
    formData.append('blueVoteCount', '0');
    formData.append('redVoteCount', '0');
    formData.append('voteTotalCount', '0');
    await BattleApi.postCreateBattle(formData);
  };

  // 모달 유형 입니다.
  const successModalProp = MODAL.ALERT_SUCCESS_BATTLE_UPLOAD;

  return (
    <form className={`${flexCenter} m-[40px]`} onSubmit={onCreateBattle}>
      <BattleTopic
        title={title}
        content={content}
        onCreateBattleFormValueChange={onCreateBattleFormValueChange}
      />
      <BattleCategory
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      <BattleOption
        blueOptionTitle={blueOptionTitle}
        redOptionTitle={redOptionTitle}
        blueOptionImg={blueOptionImg}
        redOptionImg={redOptionImg}
        onCreateBattleFormValueChange={onCreateBattleFormValueChange}
        onBlueImgChange={onBlueImgChange}
        onRedImgChange={onRedImgChange}
      />
      <div className="mt-[50px]">
        <BasicModal
          {...successModalProp}
          func={() => {
            navigate(END_POINTS.HOME);
          }}
        />
        <AlertDialogTrigger asChild>
          <Button
            bgColor="gray"
            size="large"
            fontSize="large"
            radius="round"
            type="submit"
            // disabled={
            //   !title ||
            //   !content ||
            //   !blueOptionTitle ||
            //   !redOptionTitle ||
            //   !blueOptionImg ||
            //   !redOptionImg
            // }
          >
            배틀 업로드
          </Button>
        </AlertDialogTrigger>
      </div>
    </form>
  );
};

export default CreateForm;

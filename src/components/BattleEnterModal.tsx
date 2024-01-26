import {
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog.tsx';
import ImageBox from '@/components/ImageBox.tsx';
import DeleteIcon from '@/assets/XDeleteIcon.svg?react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import Textarea from '@/components/Textarea.tsx';
import Button from '@/components/Button.tsx';
import { GetBattleInfoType } from '@/types/postType.ts';
import { useEffect, useState } from 'react';

interface Props {
  post: GetBattleInfoType;
}

// export type CommentType = {
//   userInfo: UserInfoType;
//   content: string;
//   parentId: number;
//   createdAt: Date;
//   option: 1 | 2; //어떤 옵션을 선택했는지
// };

const BattleEnterModal: React.FC<Props> = ({ post }) => {
  // const [values, onChange, setValues] = useInput({
  //   content: '',
  //   option: '',
  // });
  const [option, setOption] = useState<[boolean, boolean]>([false, false]);

  useEffect(() => {
    console.log(option);
  }, [option]);

  // const [values, onChange] = useInput({
  //   content: '',
  // });

  const onClickOption = (optionIndex: number) => {
    setOption(() => {
      const newOption = [false, false];
      newOption[optionIndex] = true;
      return newOption as [boolean, boolean];
    });
  };

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
            <ImageBox
              clickColor={option[0] ? 'blue' : 'none'}
              imgUrl={post.dataImage[0].url}
              size="medium"
              imageShape="square"
              onClick={() => onClickOption(0)}
            />
            <ImageBox
              clickColor={option[1] ? 'red' : 'none'}
              imgUrl={post.dataImage[1].url}
              size="medium"
              imageShape="square"
              onClick={() => onClickOption(1)}
            />
          </div>
        </div>
        <div className="flex mt-[30px] ">
          <span className="w-[50px] pt-[5px] font-bold text-textGrey">
            내용
          </span>
          <Textarea size={'box'} name={'content'} onChange={onChange} />
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

import { flexCenter } from '@/styles/common.style';

interface FormChangeBtnProp {
  isSignFormChange: boolean;
  setIsSignFormChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormChangeBtn: React.FC<FormChangeBtnProp> = ({
  isSignFormChange,
  setIsSignFormChange,
}) => {
  const onSignFormChange = () => {
    setIsSignFormChange((prev) => !prev);
  };

  return (
    <div className={`${flexCenter} pt-[30px] pb-[30px]`}>
      <div className="flex gap-2 text-darkGrey text-lg">
        {isSignFormChange ? (
          <button onClick={onSignFormChange}>회원가입</button>
        ) : (
          <button onClick={onSignFormChange}>로그인</button>
        )}
      </div>
    </div>
  );
};

export default FormChangeBtn;

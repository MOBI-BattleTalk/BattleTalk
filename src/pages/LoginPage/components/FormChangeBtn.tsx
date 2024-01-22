import { flexCenter } from '@/styles/common.style';
import { useNavigate } from 'react-router-dom';

interface FormChangeBtnProp {
  isSignFormChange: boolean;
  setIsSignFormChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormChangeBtn: React.FC<FormChangeBtnProp> = ({
  isSignFormChange,
  setIsSignFormChange,
}) => {
  const navigate = useNavigate();

  const onSignFormChange = () => {
    setIsSignFormChange((prev) => !prev);
  };

  const onMoveMainPage = () => {
    navigate('/main');
  };

  return (
    <div className={`${flexCenter} fixed bottom-20 left-0 right-0 `}>
      <div className="flex gap-2 text-darkGrey text-lg">
        {isSignFormChange ? (
          <button onClick={onSignFormChange}>회원가입</button>
        ) : (
          <button onClick={onSignFormChange}>로그인</button>
        )}
        <span>|</span>
        <button onClick={onMoveMainPage}>게스트로 둘러보기</button>
      </div>
    </div>
  );
};

export default FormChangeBtn;

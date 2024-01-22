import { flexCenter } from '@/styles/common.style';
import { PropsWithChildren } from 'react';

interface FormCardProps extends PropsWithChildren {
  size: 'small' | 'medium' | 'large'; //FormCard의 크기를 지정합니다.
  label: string; //FormCard의 label의 들어갈 문자열입니다.
}

/**
 * LoginPage,BattleCreatePage 에서 사용하는 FormCard 컴포넌트입니다.

 * // 사용 예시:
 * <FormCard size="medium" label="회원가입"></FormCard>
 */
const FormCard: React.FC<FormCardProps> = ({ children, label, size }) => {
  const sizeCSS = {
    small: 'w-[830px] h-[460px]',
    medium: 'w-[830px] h-[520px]',
    large: 'w-[830px] h-[1320px]',
  };

  return (
    <div
      className={`${flexCenter} flex items-center justify-center grid justify-items-start`}
    >
      <div
        className={`bg-violet rounded-t-xl text-white text-2xl font-extrabold text-center pt-[8px] ml-[30px] w-[240px] h-[48px] `}
      >
        {label}
      </div>
      <div className={`${sizeCSS[size]} bg-backgroundGrey rounded-xl`}>
        {children}
      </div>
    </div>
  );
};

export default FormCard;

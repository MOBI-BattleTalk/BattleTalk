import { flexCenter } from '@/styles/common.style';

const SkeletonUI: React.FC = () => {
  return (
    <div
      className={`${flexCenter} h-[236px] lg:w-[700px] md:w-[600px] rounded-[20px] bg-textGrey relative animate-pulse`}
    >
      <div className="w-[45px] h-[45px] bg-darkGrey rounded-[50px] absolute left-[20px] top-[12px]" />
      <div className="w-[100px] h-[100px] bg-darkGrey absolute right-[24px] bottom-[20px] rounded-[20px]" />
      <div
        className={`w-[250px] h-[24px] bg-darkGrey ${flexCenter} absolute bottom-[50px]`}
      />
      <div className="w-[100px] h-[100px] bg-darkGrey absolute left-[24px] bottom-[20px] rounded-[20px]" />
    </div>
  );
};

export default SkeletonUI;

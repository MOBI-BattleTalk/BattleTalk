import React from 'react';
import { LargeWidthCSS, SmallWidthCSS } from '@/components/ResultCss.ts';

interface Props {
  redCount: number; //빨간 옵션의 투표 수 입니다
  blueCount: number; //파란 옵션의 투표 수 입니다
  type: 'large' | 'small'; //크기 메인 페이지 : small, 디테일 페이지 : large
}

const ResultBar: React.FC<Props> = ({ type, redCount, blueCount }) => {
  const total = redCount + blueCount;
  //100%중 빨간 옵션의 선택 비율
  const redRatio = Math.round((redCount / total) * 100);
  //100%중 파란 옵션의 선택 비율
  const blueRatio = 100 - redRatio;

  const redTextColor = redRatio > blueRatio ? 'text-deepRed' : 'text-red';
  const blueTextColor = redRatio < blueRatio ? 'text-deepBlue' : 'text-blue';

  const redWidth =
    type === 'small' ? SmallWidthCSS[redRatio] : LargeWidthCSS[redRatio];

  const blueWidth =
    type === 'small' ? SmallWidthCSS[blueRatio] : LargeWidthCSS[blueRatio];

  return (
    <div className="grid grid-cols-5">
      <span
        className={`text-3xl ${redTextColor} font-bold col-span-1 flex items-center justify-center`}
      >
        {redRatio}%
      </span>
      <div className="flex col-span-3 items-center justify-center">
        <div className={`bg-red ${redWidth} h-[20px]`}></div>
        <div className={`bg-blue ${blueWidth} h-[20px]`}></div>
      </div>
      <span
        className={`text-3xl ${blueTextColor} font-bold col-span-1  flex items-center justify-center`}
      >
        {blueRatio}%
      </span>
    </div>
  );
};

export default ResultBar;

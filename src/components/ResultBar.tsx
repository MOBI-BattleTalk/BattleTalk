import React from 'react';
import {
  LargeWidthCSS,
  MediumWidthCSS,
  SmallWidthCSS,
} from '@/components/ResultCss.ts';

interface Props {
  redCount: number; //빨간 옵션의 투표 수 입니다
  blueCount: number; //파란 옵션의 투표 수 입니다
  type: 'large' | 'medium' | 'small'; //크기 메인 페이지 : small, 디테일 페이지 : large
}

const ResultBar: React.FC<Props> = ({ type, redCount, blueCount }) => {
  const total = redCount + blueCount;

  //100%중 빨간 옵션의 선택 비율
  let redRatio;
  if (redCount === 0) {
    redRatio = 0;
  } else {
    redRatio = Math.round((redCount / total) * 100);
  }

  //100%중 파란 옵션의 선택 비율
  let blueRatio;
  if (redCount === 0) {
    blueRatio = 0;
  } else {
    blueRatio = 100 - redRatio;
  }

  const redTextColor = redRatio > blueRatio ? 'text-deepRed' : 'text-red';
  const blueTextColor = redRatio < blueRatio ? 'text-deepBlue' : 'text-blue';

  const redWidth =
    type === 'small'
      ? SmallWidthCSS[redRatio]
      : type === 'medium'
        ? MediumWidthCSS[redRatio]
        : LargeWidthCSS[redRatio];

  const blueWidth =
    type === 'small'
      ? SmallWidthCSS[blueRatio]
      : type === 'medium'
        ? MediumWidthCSS[blueRatio]
        : LargeWidthCSS[blueRatio];

  const totalWidth = type === 'small' ? 'w-[300px]' : '';
  return (
    <div className={`grid grid-cols-5 ${totalWidth}`}>
      {/*파란옵션의 투표 비율입니다*/}
      <span
        className={`text-3xl ${blueTextColor} font-bold col-span-1  flex items-center justify-center`}
      >
        {blueRatio}%
      </span>
      {/*게이지 바*/}
      <div className="flex col-span-3 items-center justify-center">
        <div className={`bg-blue ${blueWidth} h-[20px]`}></div>
        <div className={`bg-red ${redWidth} h-[20px]`}></div>
      </div>
      {/*빨간옵션의 투표 비율입니다*/}
      <span
        className={`text-3xl ${redTextColor} font-bold col-span-1 flex items-center justify-center`}
      >
        {redRatio}%
      </span>
    </div>
  );
};

export default ResultBar;

import React from 'react';

interface Props {
  currentNum: number;
  maxNum: number;
}

/**
 * 폼에서 사용하는 글자수 컴포넌트입니다.

 * // 사용 예시:
 * <CharacterCounter currentNum="12" maxNum="100"></FormCard>
 */
const CharacterCounter: React.FC<Props> = ({ currentNum, maxNum }) => {
  return (
    <div className="flex gap-[1px] text-darkGrey font-semibold text-sm">
      <span>{currentNum}</span>
      <span>/</span>
      <span>{maxNum}</span>
    </div>
  );
};

export default CharacterCounter;

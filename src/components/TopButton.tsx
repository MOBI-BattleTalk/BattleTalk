// @ts-ignore
import TopArrow from '@/assets/TopArrow.svg?react';
// @ts-ignore
import TopArrowHover from '@/assets/TopArrowHover.svg?react';
import { useState } from 'react';

function TopButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToTop}
      className={`w-[60px] h-[60px] rounded-full border-[3px] border-violet flex items-center justify-center font-extrabold flex-col text-violet ${
        isHovered ? 'hover:text-skyblue hover:border-skyblue' : ''
      }`}
    >
      {isHovered ? <TopArrowHover /> : <TopArrow />}
      <div>TOP</div>
    </div>
  );
}

export default TopButton;

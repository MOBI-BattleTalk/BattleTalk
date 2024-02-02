import Input from '@/components/Input';
import NavigateBox from '@/components/NavigateBox';
import OpenIcon from '@/assets/OpenArrow.svg?react';
import CloseIcon from '@/assets/CloseArrowIcon.svg?react';
import { useState } from 'react';
import { Category } from '@/types/postType';

interface CategoryProps {
  categoryValue: Category;
  setCategoryValue: React.Dispatch<React.SetStateAction<Category>>;
}

const BattleCategory: React.FC<CategoryProps> = ({
  categoryValue,
  setCategoryValue,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenCategory = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeCategoryValue = (name: Category) => {
    setCategoryValue(name);
    setIsOpen((prev) => !prev);
  };

  const categoryArr = Object.values(Category).map((category) => ({
    name: category,
    func: () => onChangeCategoryValue(category),
  }));

  return (
    <div className="flex md:w-[620px] z-20 m-[20px] w-[420px]">
      <label className="text-xl font-extrabold pt-[16px] w-[100px]">
        카테고리
      </label>
      <div className="flex relative ">
        <div className="pointer-events-none">
          <Input size="option" value={categoryValue} />
        </div>
        <div
          className="cursor-pointer mt-[20px] absolute ml-[106px]"
          onClick={onOpenCategory}
        >
          {isOpen ? <OpenIcon /> : <CloseIcon />}
        </div>
      </div>
      {isOpen && (
        <div className="border-4 border-lineGrey rounded-xl absolute ml-[100px] mt-[54px]">
          <NavigateBox type={'vertical'} OptionsArr={categoryArr} />
        </div>
      )}
    </div>
  );
};

export default BattleCategory;

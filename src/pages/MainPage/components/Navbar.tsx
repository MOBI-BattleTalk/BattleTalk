import { useNavigate, useSearchParams } from 'react-router-dom';

enum Category {
  'all' = '전체',
  'it' = 'IT',
  'sport' = '스포츠',
  'game' = '게임',
  'enter' = '엔터',
  'life' = '라이프',
  'etc' = 'etc',
}

//메인 페이지에서 사용하는 navbar입니다.
//url에 있는 directory에 따라 세부 주제의 카테고리가 설정됩니다.

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('directory');

  const CategoryCSS = {
    selected: 'text-violet border-b-[3px] border-violet',
    unselected: 'text-darkGrey',
  };

  const navigate = useNavigate();
  return (
    <div className="flex justify-evenly w-[850px] font-bold text-lg">
      {Object.entries(Category).map((category) => {
        const [key, value] = category;

        return (
          <div
            className={`${currentCategory === key ? CategoryCSS.selected : CategoryCSS.unselected} hover:text-violet hover:border-b-[3px] hover:border-violet`}
            onClick={() => navigate(`/main?directory=${key}`)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

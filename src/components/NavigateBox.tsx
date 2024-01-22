type OptionType = {
  name: string;
  func: () => void;
};

interface Props {
  type: 'vertical' | 'horizontal';
  OptionsArr: OptionType[];
}

const hOptionCSS = {
  noBorder: 'h-[25px] hover:bg-lightGrey rounded-[3px] pr-[8px] pl-[8px]',
  border:
    'border-r-[2px] h-[25px] border-grey rounded-[0px] hover:bg-lightGrey rounded-[3px] pr-[8px] pl-[8px]',
};

const vOptionCSS = {
  noBorder: 'w-[100x] hover:bg-lightGrey rounded-[3px] text-center p-[10px]',
  border:
    'w-[100px] border-b-[2px] border-grey rounded-[0px] hover:bg-lightGrey rounded-[3px] text-center  p-[10px]',
};

/**
 * 여러가지 옵션을 넣을 수 있는 네비게이션 바입니다.

 * // 사용 예시:
 *  <NavigateBox
 *         type={'horizontal'}
 *         OptionsArr={[
 *           {
 *             name: '회원가입',
 *             func: () => navigate('/'),
 *           },
 *           {
 *             name: '로그인',
 *             func: () => navigate('/login'),
 *           },
 *         ]}
 *       />
 */

const NavigateBox: React.FC<Props> = ({ type, OptionsArr }) => {
  //평행일때
  if (type === 'horizontal') {
    return (
      <div className="flex text-textGrey">
        <div className="bg-blue"></div>
        {OptionsArr.map((option, index) => {
          return (
            <div
              className={
                index === OptionsArr.length - 1
                  ? hOptionCSS.noBorder
                  : hOptionCSS.border
              }
              onClick={option.func}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    );
  }

  //수직일떄
  return (
    <div className="flex text-textGrey flex-col w-[100px]">
      <div className="bg-blue"></div>
      {OptionsArr.map((option, index) => {
        return (
          <div
            className={`${
              index === OptionsArr.length - 1
                ? vOptionCSS.noBorder
                : vOptionCSS.border
            } w-[100px]`}
            onClick={option.func}
          >
            {option.name}
          </div>
        );
      })}
    </div>
  );
};

export default NavigateBox;

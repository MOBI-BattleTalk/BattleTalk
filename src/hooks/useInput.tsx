import { useState, ChangeEvent } from 'react';

// InputValues의 각 키와 값의 type 입니다.
type InputValues = {
  [key: string]: string;
};

// useInput 훅의 반환 타입입니다.
// <input/><textarea/>태그 모두 사용할 수 있습니다.
type UseInputsReturnType = [
  InputValues,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  React.Dispatch<React.SetStateAction<InputValues>>,
];

/**
 * input의 value값을 다루기 위한 React 커스텀 훅입니다.
 */
const useInput = (initialValue: InputValues): UseInputsReturnType => {
  // useState 훅을 사용하여 초기 상태 값을 설정했습니다.
  const [value, setValue] = useState<InputValues>(initialValue);

  // input value가 변경될 때마다 호출되는 onChange 이벤트 함수입니다.
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // input value 값, onChange 이벤트 함수, input value 상태를 업데이트 하는 set함수를 포함하는 배열을 반환합니다.
  return [value, onChange, setValue];
};

export default useInput;

/**
 * 사용 예시 입니다.
 *
 * @example
 * const initialSignInInputValue = {
 *    id : "",
 *    pw : "",
 * }
 *
 * const [signInValue, onSignInChange, setSignInValue] = useInput(initialSignInInputValue);
 *
 * const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
 *    e.preventDefault();
 *    console.log('id:', signInValue.id);
 *    console.log('pw:', signInValue.pw);
 * }
 *
 * <form onSubmit={onSignIn}>
 *    <input name="id" value="signInValue.id" onChange={onSignInChange} />
 *    <input name="pw" value="signInValue.pw" onChange={onSignInChange} />
 * </form>
 */

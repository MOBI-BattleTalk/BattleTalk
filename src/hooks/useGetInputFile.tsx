import { ChangeEvent, useState } from 'react';

/**
 * input 파일 값을 꺼내주는 커스텀 훅입니다.
 *
 * @param {InputFileValues} initialValue - 각 키와 값의 type 입니다.
 */
type InputFileValues = {
  [key: string]: File | undefined;
};
type UseGetInputFileReturnType = [
  InputFileValues,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<InputFileValues>>,
];

const useGetInputFile = (
  initialValue: InputFileValues,
): UseGetInputFileReturnType => {
  const [fileValue, setFileValue] = useState<InputFileValues>(initialValue);

  /**
   * input의 file이 변경될 때마다 호출되는 onChange 이벤트 함수입니다.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - input 파일 변경 이벤트 타입입니다.
   */
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileValue((prev) => ({
        ...prev,
        [e.target.name]: file,
      }));
    }
  };

  /**
   * @returns {UseGetInputFileReturnType} - 현재 input 파일 값, input 파일 값을 업데이트 하는 함수를 반환합니다.
   */
  return [fileValue, onChange, setFileValue];
};

export default useGetInputFile;
/**
 * 사용 예시 입니다.
 *
 * @example
 * const initialProfileValue = {
 *    profile : undefined,
 * }
 *
 * const [profileValue, onProfileChange, setProfileValue] = useInput(initialProfileValue);
 *
 * const onProfileChange = (e: React.FormEvent<HTMLFormElement>) => {
 *    e.preventDefault();
 * }
 *
 * <form onSubmit={onProfileChange}>
 *    <input name="profile" type="file" accept="image/*" onChange={onProfileChange} />
 * </form>
 */

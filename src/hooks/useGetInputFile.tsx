import { ChangeEvent, useState } from 'react';

type InputFileValues = {
  [key: string]: string | undefined;
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileValue((prev) => ({
      ...prev,
      [e.target.name]: file ? URL.createObjectURL(file) : undefined,
    }));
  };

  return [fileValue, onChange, setFileValue];
};

export default useGetInputFile;

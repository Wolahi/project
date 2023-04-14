import { useState } from "react";

const useLabel = (initialValue: string): any => {
  const [topLabel, setTop] = useState(false);
  const [value, setValue] = useState(initialValue);
  const onFocus = (): void => {
    setTop(true);
  };

  const onBlur = (): void => {
    if (value.length === 0) {
      setTop(false);
    }
  };
  const onChange = (input: string): void => {
    setValue(input);
  };
  return { onFocus, topLabel, onBlur, onChange };
};

export default useLabel;

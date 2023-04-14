import { useState } from "react";

const useLabel = (initialValue: string): any => {
  const [topLabel, setTop] = useState(false);
  const [value, setValue] = useState(initialValue);
  const onFocus = (): void => {
    setTop(true);
  };
  const handleAutoFill = (e: any): void => {
    setTop(e.animationName === "onAutoFillStart");
  };
  const onBlur = (): void => {
    if (value.length === 0) {
      setTop(false);
    }
  };
  const onChange = (input: string): void => {
    setValue(input);
  };
  return { onFocus, topLabel, onBlur, onChange, handleAutoFill };
};

export default useLabel;

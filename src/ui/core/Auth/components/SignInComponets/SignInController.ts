import { useState } from "react";

const useChangeVis = (): any => {
  const [typeVis, setTypeVis] = useState("password");
  const changeVis = (): void => {
    if (typeVis === "password") {
      setTypeVis("text");
    } else {
      setTypeVis("password");
    }
  };
  return { changeVis, typeVis };
};
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

export { useLabel, useChangeVis };

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

export default useChangeVis;

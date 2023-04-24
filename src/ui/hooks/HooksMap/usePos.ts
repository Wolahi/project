import { useState } from "react";

const usePos = (): any => {
  const [pos, setPos] = useState({});

  const geo = navigator.geolocation;
  const initPos = (posInit: any): void => {
    setPos(posInit.coords);
  };
  geo.getCurrentPosition(initPos);

  return pos;
};

export default usePos;

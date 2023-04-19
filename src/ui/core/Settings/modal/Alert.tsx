import React, { ReactElement, useEffect } from "react";
import "../../../style/Alert.scss";
import CloseSVG from "./CloseSVG";

const Alert = ({
  active,
  setActive,
  text,
}: {
  active: boolean;
  setActive: any;
  text: string;
}): ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 10 * 1000);
  }, [active, setActive]);

  return (
    <div>
      {active && (
        <div className="alert-style-position">
          <div className="alert-style">
            <div className="text-place">
              {text}
              <button type="button" onClick={(): void => setActive(false)}>
                <CloseSVG id="svgClose" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;

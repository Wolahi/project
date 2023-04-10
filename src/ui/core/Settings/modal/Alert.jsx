import React, { useEffect } from "react";
import icon from "../icons/close-icon.svg";
import "../../../style/Alert.scss";

// eslint-disable-next-line react/prop-types
const Alert = ({ active, setActive, text }) => {
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
              <button type="button" onClick={() => setActive(false)}>
                <img src={icon} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;

import React, { ReactElement } from "react";
import Icon from "../../../../assets/icons/close-icon.svg";
import "../../../style/Alert.scss";

const Alert = ({
  active,
  setActive,
  text,
}: {
  active: boolean;
  setActive: any;
  text: string;
}): ReactElement => {
  return (
    <div>
      {active && (
        <div className="alert-style-position">
          <div className="alert-style">
            <div className="text-place">
              {text}
              <button type="button" onClick={(): void => setActive(false)}>
                <Icon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;

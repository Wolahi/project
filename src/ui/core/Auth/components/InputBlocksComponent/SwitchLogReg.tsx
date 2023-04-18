import React, { ReactElement } from "react";
import styles from "../AuthPage.module.scss";
import { switchSign } from "../../../../../store/authReducer";
import useDataLogin from "../SignInComponets/SignInData";

const SwitchLogReg = (props: any): ReactElement => {
  const { text } = props;
  const { sign } = props;
  const valid = useDataLogin();
  return (
    <div className={styles["change-form-text"]}>
      <span>
        {text}{" "}
        <a
          href="/#"
          onClick={(): void => {
            valid.dispatch(switchSign());
          }}>
          {sign}
        </a>{" "}
      </span>
    </div>
  );
};

export default SwitchLogReg;

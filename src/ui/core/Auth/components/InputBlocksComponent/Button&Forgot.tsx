import React, { ReactElement } from "react";
import styles from "../AuthPage.module.scss";

const ButtonForgot = (props: any): ReactElement => {
  const { sign } = props;
  const { signUp } = props;
  return (
    <div>
      {!signUp && (
        <div className={styles.linkForgot}>
          <a href="/#">Forgot your password?</a>
        </div>
      )}
      <button type="submit" className={styles.buttonEnable}>
        {sign}
      </button>
    </div>
  );
};

export default ButtonForgot;

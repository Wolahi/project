import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "../AuthPage.module.scss";

const SwitchLogReg = (props: any): ReactElement => {
  const { text } = props;
  const { sign } = props;
  const { path } = props;
  return (
    <div className={styles.changeFormText}>
      <span>
        {text} <Link to={path}>{sign}</Link>{" "}
      </span>
    </div>
  );
};

export default SwitchLogReg;

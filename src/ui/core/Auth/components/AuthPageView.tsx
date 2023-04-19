import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.scss";

const AuthPageView = (): ReactElement => {
  return (
    <div className={styles["auth-page"]}>
      <div className={styles.logo}>LOGO</div>
      <Link to="signIn">Sign in</Link>
      <Link to="signUp">Sign Up</Link>
    </div>
  );
};

export default AuthPageView;

import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import SignInView from "./SignInComponets/SignInView";
import SignUpView from "./SignUpComponents/SignUpView";
import styles from "./AuthPage.module.scss";

const AuthPage = (): ReactElement => {
  const sign = useSelector((state: any) => state.auth.sign);
  useEffect((): void => {
    localStorage.setItem("sign", sign);
  }, [sign]);
  return (
    <div className={styles["auth-page"]}>
      <div className={styles.logo}>LOGO</div>
      {sign ? <SignInView /> : <SignUpView />}
    </div>
  );
};

export default AuthPage;

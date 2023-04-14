import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../../style/AuthPage.scss";
import SignInView from "./SignInComponets/SignInView";
import SignUpView from "./SignUpComponents/SignUpView";

const AuthPage = (): ReactElement => {
  const sign = useSelector((state: any) => state.auth.sign);

  useEffect((): void => {
    localStorage.setItem("sign", sign);
  }, [sign]);
  return (
    <div className="auth-page">
      <div className="logo">LOGO</div>
      {sign ? <SignInView /> : <SignUpView />}
    </div>
  );
};

export default AuthPage;

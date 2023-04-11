import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import SignIn from "./SiginIn";
import "../../../style/AuthPage.scss";
import SignUP from "./SignUP";

const AuthPage = (): ReactElement => {
  const sign = useSelector((state: any) => state.auth.sign);

  useEffect((): void => {
    localStorage.setItem("sign", sign);
  }, [sign]);
  return (
    <div className="auth-page">
      <div className="logo">LOGO</div>
      {sign ? <SignIn /> : <SignUP />}
    </div>
  );
};

export default AuthPage;

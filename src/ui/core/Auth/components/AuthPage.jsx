import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import "../../../style/AuthPage.scss";
import SignUP from "./SignUP";

const AuthPage = () => {
  const sign = useSelector((state) => state.auth.sign);

  useEffect(() => {
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

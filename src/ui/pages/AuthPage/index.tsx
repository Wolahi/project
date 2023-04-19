import React, { ReactElement } from "react";
import { Outlet } from "react-router";
import lang from "./en.json";
import { TranslationProvider } from "../../../libs/TranslitionProvaider/TranslationProvider";

const Auth = (): ReactElement => {
  return (
    <TranslationProvider translations={lang}>
      <Outlet />
    </TranslationProvider>
  );
};

export default Auth;

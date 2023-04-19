import React, { ReactElement } from "react";
import AuthPageView from "../../core/Auth/components/AuthPageView";
import { TranslationProvider } from "../../../libs/TranslitionProvaider/TranslationProvider";

import lang from "./en.json";

const Auth = (): ReactElement => {
  return (
    <TranslationProvider translations={lang}>
      <AuthPageView />
    </TranslationProvider>
  );
};

export default Auth;

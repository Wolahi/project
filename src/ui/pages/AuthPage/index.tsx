import React, { ReactElement } from "react";
import AuthPage from "../../core/Auth/components/AuthPage";
import { TranslationProvider } from "../../../libs/TranslitionProvaider/TranslationProvider";

import lang from "./en.json";

/* export const getServerSideProps: any = async () => {
  const lang = "en";
  const translation =
  return {
    props: {
      translation: translation.text,
      lang,
    },
  };
}; */
const Auth = (): ReactElement => {
  return (
    <TranslationProvider translations={lang}>
      <AuthPage />
    </TranslationProvider>
  );
};

export default Auth;

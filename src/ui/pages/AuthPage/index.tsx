import React, { ReactElement } from "react";
import AuthPage from "../../core/Auth/components/AuthPage";
import { TranslationProvider } from "../../../libs/TranslitionProvaider/TranslationProvider";

interface AuthProps {
  translation: Record<string, string>;
  lang: string;
}
const Auth = ({ translation, lang }: AuthProps): ReactElement => {
  return (
    <TranslationProvider translations={translation} lang={lang}>
      <AuthPage />
    </TranslationProvider>
  );
};

export default Auth;

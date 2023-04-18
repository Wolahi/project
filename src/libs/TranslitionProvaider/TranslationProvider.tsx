import { createContext, useContext } from "react";

export type TranslationContextProps = {
  translations: any;
  // lang: string;
};
const TranslationContext = createContext<TranslationContextProps>({
  translations: {},
  // lang: "en",
});

interface IProps {
  children: JSX.Element;
  translations: TranslationContextProps["translations"];
  // lang: string;
}

export const useTranslations = (): any => useContext(TranslationContext);

export const TranslationProvider = ({ children, translations }: IProps): any => {
  return <TranslationContext.Provider value={translations}>{children}</TranslationContext.Provider>;
};

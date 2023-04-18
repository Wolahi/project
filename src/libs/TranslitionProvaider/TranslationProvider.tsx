import { createContext, useContext } from "react";

export type TranslitionContextProps = {
  translations: Record<string, string>;
  lang: string;
};
const TranslationContext = createContext<TranslitionContextProps>({
  translations: {},
  lang: "en",
});

interface IProps {
  children: JSX.Element;
  translations: TranslitionContextProps["translations"];
  lang: string;
}

export const useTranslations = (): any => useContext(TranslationContext);

export const TranslationProvider = ({ children, translations, lang }: IProps): any => {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TranslationContext.Provider value={{ translations, lang }}>
      {children}
    </TranslationContext.Provider>
  );
};

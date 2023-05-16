import { ReactElement, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ChangeLang.module.scss";

const ChangeLang = (): ReactElement => {
  const container = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const changeLanguage = (): void => {
    if (lang === "en") {
      i18n.changeLanguage("ru");
      setLang("ru");
    } else {
      i18n.changeLanguage("en");
      setLang("en");
    }
  };

  return (
    <div className={styles.root} ref={container}>
      <label htmlFor="changeLang" className={styles.switch}>
        <input
          id="changeLang"
          type="checkbox"
          onClick={(): void => {
            changeLanguage();
          }}
        />
        <span className={styles.slider} />
      </label>
    </div>
  );
};

export default ChangeLang;

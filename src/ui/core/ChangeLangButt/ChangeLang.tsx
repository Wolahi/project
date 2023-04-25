import React, { ReactElement, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ChangeLang.module.scss";

const ChangeLang = (): ReactElement => {
  const container = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const changeLanguage = (language: any): void => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  const handlOpenDropown = (): void => {
    setOpen(true);
  };

  const handlCloseDropown = (e: any): void => {
    if (container.current && !container.current.contains(e.target as HTMLDivElement))
      setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handlCloseDropown);
    return () => document.removeEventListener("mousedown", handlCloseDropown);
  }, []);

  return (
    <div className={styles.root} ref={container}>
      <div className={styles.button}>
        <input
          type="button"
          className={styles.viewLang}
          onClick={handlOpenDropown}
          value={lang.toUpperCase()}
        />
      </div>
      {open && (
        <div className={styles.dropdown}>
          <button
            type="button"
            onClick={(): void => {
              changeLanguage("en");
            }}>
            EN
          </button>
          <button
            type="button"
            onClick={(): void => {
              changeLanguage("ru");
            }}>
            RU
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangeLang;

import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ChangeLang.module.scss";
import store from "../../../../redux/store/Store";
import { switchLang } from "../../../../redux/actions";

const ChangeLang = (): ReactElement => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: any): void => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles.root}>
      <button
        className={store.getState().lang.lang ? styles.passive : styles.active}
        type="button"
        onClick={(): void => {
          changeLanguage("en");
          if (store.getState().lang.lang) {
            store.dispatch(switchLang());
          }
        }}>
        EN
      </button>
      <button
        className={!store.getState().lang.lang ? styles.passive : styles.active}
        type="button"
        onClick={(): void => {
          changeLanguage("ru");
          if (!store.getState().lang.lang) {
            store.dispatch(switchLang());
          }
        }}>
        RU
      </button>
    </div>
  );
};

export default ChangeLang;

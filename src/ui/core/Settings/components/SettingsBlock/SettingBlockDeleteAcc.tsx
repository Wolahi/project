import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import styles from "../SettingPage.module.scss";

const SettingBlockDeleteAcc = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.delAcc")}</h2>
      {t("settingsPage.perDelAcc")}
      <button
        type="button"
        onClick={(): void => {
          setShowAlert(true);
          setTextAlert(alertText);
        }}>
        {t("settingsPage.del")}
      </button>
    </div>
  );
};

export default SettingBlockDeleteAcc;

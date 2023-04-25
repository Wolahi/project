import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import styles from "../SettingPage.module.scss";

const SettingBlockPassword = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.password")}</h2>
      {t("settingsPage.requestPas")}
      <button
        type="button"
        onClick={(): void => {
          setShowAlert(true);
          setTextAlert(alertText);
        }}>
        Request
      </button>
    </div>
  );
};

export default SettingBlockPassword;

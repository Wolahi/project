import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../SettingPage.module.scss";
import InputPassword from "../modal/components/InputPassword";

const SettingBlockPassword = (props: any): ReactElement => {
  const { setShowAlert, setTextAlert } = props;
  const { t } = useTranslation();
  const [validPassword, setValidPassword] = useState(false);
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.password")}</h2>
      {t("settingsPage.requestPas")}
      <button
        type="button"
        onClick={(): void => {
          setValidPassword(true);
        }}>
        {t("settingsPage.setNewPassword")}
      </button>
      {validPassword && (
        <InputPassword
          setShowAlert={setShowAlert}
          setTextAlert={setTextAlert}
          setShow={setValidPassword}
        />
      )}
    </div>
  );
};

export default SettingBlockPassword;

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import SettingModalPage from "../modal/SettingModalPage";
import styles from "../SettingPage.module.scss";
import useData from "../SettingPageData";

const SettingBlockEmail = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  const data = useData();
  const { t } = useTranslation();
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.email")}</h2>
      <div>
        {t("settingsPage.emailIs")} <b>test@email.com</b>
      </div>
      {!data.showEmailChange && (
        <button
          type="button"
          onClick={(): void => {
            data.setShowEmailChange(true);
          }}>
          {t("settingsPage.change")}
        </button>
      )}
      <SettingModalPage
        show={data.showEmailChange}
        setShow={data.setShowEmailChange}
        setShowAlert={setShowAlert}
        setTextAlert={setTextAlert}
        text={alertText}
      />
    </div>
  );
};

export default SettingBlockEmail;

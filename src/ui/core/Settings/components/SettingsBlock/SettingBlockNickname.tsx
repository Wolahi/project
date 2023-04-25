import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import SettingModalPage from "../modal/SettingModalPage";
import styles from "../SettingPage.module.scss";
import useData from "../SettingPageData";

const SettingBlockNickname = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  const data = useData();
  const { t } = useTranslation();
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.userName")}</h2>
      <div>
        {t("settingsPage.userNameIs")} <b>mr.ananasick</b>
      </div>
      {!data.showNicknameChange && (
        <button
          type="button"
          onClick={(): void => {
            data.setShowNicknameChange(true);
          }}>
          Change
        </button>
      )}
      <SettingModalPage
        show={data.showNicknameChange}
        setShow={data.setShowNicknameChange}
        setShowAlert={setShowAlert}
        setTextAlert={setTextAlert}
        text={alertText}
      />
    </div>
  );
};

export default SettingBlockNickname;

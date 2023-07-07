import { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";
import styles from "./SettingPage.module.scss";
import ComponentAlert from "../../utils/alert/Alert";
import SettingBlockNickname from "./SettingsBlock/SettingBlockNickname";
import useData from "./SettingPageData";
import SettingBlockEmail from "./SettingsBlock/SettingBlockEmail";
import SettingBlockPassword from "./SettingsBlock/SettingsBlockPassword";
import SettingBlockDeleteAcc from "./SettingsBlock/SettingBlockDeleteAcc";

const SettingPage = (): ReactElement => {
  const data = useData();
  const { t } = useTranslation();
  const { SettingAlert: Alert } = data;
  const cookies = new Cookies();
  const currentUser = cookies.get("user");
  return (
    <div>
      <div className={styles.settingPageStyle}>
        <h1>{t("settingsPage.header")}</h1>
        <SettingBlockNickname
          alertText={t("settingsPage.alertNickName")}
          setShowAlert={Alert.setShowAlert}
          setTextAlert={Alert.setTextAlert}
          userNickName={currentUser.userName}
        />
        <SettingBlockEmail
          alertText={t("settingsPage.alertEmail")}
          setShowAlert={Alert.setShowAlert}
          setTextAlert={Alert.setTextAlert}
          userEmail={currentUser.email}
        />
        <SettingBlockPassword
          alertText={t("settingsPage.alertPas")}
          setShowAlert={Alert.setShowAlert}
          setTextAlert={Alert.setTextAlert}
        />
        <SettingBlockDeleteAcc
          alertText={t("settingsPage.alertDel")}
          setShowAlert={Alert.setShowAlert}
          setTextAlert={Alert.setTextAlert}
        />
      </div>
      <ComponentAlert
        active={Alert.showAlert}
        setActive={Alert.setShowAlert}
        text={Alert.textAlert}
      />
    </div>
  );
};

export default SettingPage;

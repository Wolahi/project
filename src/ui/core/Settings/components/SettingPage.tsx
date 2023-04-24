import { ReactElement } from "react";
import styles from "./SettingPage.module.scss";
import ComponentAlert from "./modal/Alert";
import SettingBlockNickname from "./SettingsBlock/SettingBlockNickname";
import useData from "./SettingPageData";
import SettingBlockEmail from "./SettingsBlock/SettingBlockEmail";
import SettingBlockPassword from "./SettingsBlock/SettingsBlockPassword";
import SettingBlockDeleteAcc from "./SettingsBlock/SettingBlockDeleteAcc";

const SettingPage = (): ReactElement => {
  const data = useData();
  const { SettingAlert: Alert } = data;
  return (
    <div>
      <div className={styles.settingPageStyle}>
        <h1>Settings</h1>
        <SettingBlockNickname
          alertText="You changed your nickname"
          setShowAlert={Alert.setShowAlert}
          setTextAlert={Alert.setTextAlert}
        />
        <SettingBlockEmail
          alertText="You changed your email"
          setShowAlert={Alert.setShowAlert}
          setTextAlert={Alert.setTextAlert}
        />
        <SettingBlockPassword
          alertText="You changed your password"
          setShowAlert={Alert.setShowAlert}
          setTextAlert={Alert.setTextAlert}
        />
        <SettingBlockDeleteAcc
          alertText="You have deleted your account"
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

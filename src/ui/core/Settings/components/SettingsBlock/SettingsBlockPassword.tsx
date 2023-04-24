import { ReactElement } from "react";
import styles from "../SettingPage.module.scss";

const SettingBlockPassword = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  return (
    <div className={styles.textBlock}>
      <h2>Password</h2>
      You can request a new password to your email
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

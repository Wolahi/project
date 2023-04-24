import { ReactElement } from "react";
import styles from "../SettingPage.module.scss";

const SettingBlockDeleteAcc = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  return (
    <div className={styles.textBlock}>
      <h2>Delete account</h2>
      Permanently delete this account?
      <button
        type="button"
        onClick={(): void => {
          setShowAlert(true);
          setTextAlert(alertText);
        }}>
        Delete
      </button>
    </div>
  );
};

export default SettingBlockDeleteAcc;

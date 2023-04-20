import { ReactElement, useState } from "react";
import SettingModalPage from "./modal/SettingModalPage";
import styles from "./SettingPage.module.scss";
import Alert from "./modal/Alert";

const SettingPage = (): ReactElement => {
  const [showNicknameChange, setShowNicknameChange] = useState(false);
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");

  return (
    <div>
      <div className={styles.settingPageStyle}>
        <h1>Settings</h1>
        <div className={styles.textBlock}>
          <h2>User nickname</h2>
          <div>
            Yor nickname is <b>mr.ananasick</b>
          </div>
          {!showNicknameChange && (
            <button
              type="button"
              onClick={(): void => {
                setShowNicknameChange(true);
              }}>
              Change
            </button>
          )}
          <SettingModalPage
            show={showNicknameChange}
            setShow={setShowNicknameChange}
            setShowAlert={setShowAlert}
            setTextAlert={setTextAlert}
            text="You changed your nickname"
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Email address</h2>
          <div>
            Your email address is <b>test@email.com</b>
          </div>
          {!showEmailChange && (
            <button
              type="button"
              onClick={(): void => {
                setShowEmailChange(true);
              }}>
              Change
            </button>
          )}
          <SettingModalPage
            show={showEmailChange}
            setShow={setShowEmailChange}
            setShowAlert={setShowAlert}
            setTextAlert={setTextAlert}
            text="You changed your email"
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Password</h2>
          You can request a new password to your email
          <button
            type="button"
            onClick={(): void => {
              setShowAlert(true);
              setTextAlert("Вы изменили свой пароль");
            }}>
            Request
          </button>
        </div>
        <div className={styles.textBlock}>
          <h2>Delete account</h2>
          Permanently delete this account?
          <button
            type="button"
            onClick={(): void => {
              setShowAlert(true);
              setTextAlert("Вы удалили свою учетную запись");
            }}>
            Delete
          </button>
        </div>
      </div>
      <Alert active={showAlert} setActive={setShowAlert} text={textAlert} />
    </div>
  );
};

export default SettingPage;

import { ReactElement } from "react";
import SettingModalPage from "../modal/SettingModalPage";
import styles from "../SettingPage.module.scss";
import useData from "../SettingPageData";

const SettingBlockEmail = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  const data = useData();
  return (
    <div className={styles.textBlock}>
      <h2>Email address</h2>
      <div>
        Your email address is <b>test@email.com</b>
      </div>
      {!data.showEmailChange && (
        <button
          type="button"
          onClick={(): void => {
            data.setShowEmailChange(true);
          }}>
          Change
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

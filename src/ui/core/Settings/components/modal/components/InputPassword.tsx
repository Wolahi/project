import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";
import styles from "../SettingModalPage.module.scss";

const InputPassword = (props: any): ReactElement => {
  const { setShowAlert, setTextAlert, setShow } = props;
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [passwordVal, setpasswordVal] = useState("");
  const [passwordRes, setPasswordRes] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const ChangePassword = async (id: any, newPassword: any): Promise<any> => {
    await fetch("http://localhost:8080/settings/ChangeUserPassword", {
      method: "POST",
      body: JSON.stringify({
        userId: id,
        Password: newPassword,
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result[0].res) {
          setShowAlert(true);
          setTextAlert(t("settingsPage.alertPas"));
          setShow(false);
        }
      });
  };
  const onSubmit = (): any => {
    if (password.length < 8) {
      setValidPassword(true);
    } else {
      const cookies = new Cookies();
      const currentUser = cookies.get("user");
      if (passwordVal === password) {
        ChangePassword(currentUser.id, password);
      } else {
        setPasswordRes(true);
      }
    }
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBody}>
        <button type="button" className={styles.close} onClick={(): any => setShow(false)}>
          <div className={styles.svgClose}> </div>
        </button>
        <div className={styles.modalHeader}>
          <h2 className={styles.heading}>{t("settingsPage.headingChangePassword")}</h2>
        </div>
        <div className={styles.deleteModal}>
          <span className={styles.deleteModalText}>{t("settingsPage.ChangePassword")}</span>
          <input
            className={styles.input}
            placeholder={String(t("settingsPage.PasswordVal"))}
            type="password"
            onChange={(e): any => setPassword(e.target.value)}
          />
          <span className={styles.deleteModalText}>{t("settingsPage.ChangePasswordVal")}</span>
          <input
            className={styles.input}
            placeholder={String(t("settingsPage.PasswordVal"))}
            type="password"
            onChange={(e): any => setpasswordVal(e.target.value)}
          />
          {passwordRes ? (
            <span className={styles.deleteModalError}>
              {t("settingsPage.ChangePasswordErrorRes")}
            </span>
          ) : (
            validPassword && (
              <span className={styles.deleteModalError}>{t("errors.minLengthError8")}</span>
            )
          )}
          <button className={styles.btnChange} type="button" onClick={onSubmit}>
            {t("settingsPage.change")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPassword;

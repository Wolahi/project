import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";
import styles from "../SettingPage.module.scss";

const SettingBlockPassword = (props: any): ReactElement => {
  const { alertText, setShowAlert, setTextAlert } = props;
  const { t } = useTranslation();
  const DeleteAcc = async (): Promise<any> => {
    await fetch("http://localhost:8080/settings/DeletedAcc", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result[0].res) {
          console.log(result);
        }
      });
  };
  const onSubmit = (): any => {
    const cookies = new Cookies();
    const currentUser = cookies.get("user");
    console.log(currentUser);
    setShowAlert(true);
    setTextAlert(alertText);
    DeleteAcc();
  };
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.password")}</h2>
      {t("settingsPage.requestPas")}
      <button
        type="button"
        onClick={(): void => {
          onSubmit();
        }}>
        {t("settingsPage.request")}
      </button>
    </div>
  );
};

export default SettingBlockPassword;

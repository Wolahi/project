import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import styles from "../SettingModalPage.module.scss";
import store from "../../../../../../redux/store/Store";
import { SetText, ShowAlert } from "../../../../../../redux/actions";

const DeleteModal = (props: any): ReactElement => {
  const { setShow } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const DeleteAcc = async (currentUserId: any): Promise<any> => {
    await fetch("http://localhost:8080/settings/DeletedAcc", {
      method: "POST",
      body: JSON.stringify({
        userId: currentUserId,
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result[0].res) {
          store.dispatch(ShowAlert(true));
          store.dispatch(SetText(t("settingsPage.alertDel")));
          navigate("/auth/signIn");
        }
      });
  };
  const onSubmit = (): any => {
    const cookies = new Cookies();
    const currentUser = cookies.get("user");
    DeleteAcc(currentUser.id);
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBody}>
        <button type="button" className={styles.close} onClick={(): any => setShow(false)}>
          <div className={styles.svgClose}> </div>
        </button>
        <div className={styles.modalHeader}>
          <h2 className={styles.heading}>{t("settingsPage.headingDel")}</h2>
        </div>
        <div className={styles.deleteModal}>
          <span className={styles.deleteModalText}>{t("settingsPage.perModalDelAcc")}</span>
          <button className={styles.btnDelete} type="button" onClick={onSubmit}>
            {t("settingsPage.del")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

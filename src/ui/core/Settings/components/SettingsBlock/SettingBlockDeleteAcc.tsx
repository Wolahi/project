import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../SettingPage.module.scss";
import DeleteModal from "../modal/components/DeleteModal";

const SettingBlockDeleteAcc = (props: any): ReactElement => {
  const { alertText } = props;
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.delAcc")}</h2>
      {t("settingsPage.perDelAcc")}
      <button type="button" onClick={(): any => setShow(true)}>
        {t("settingsPage.del")}
      </button>
      {show && <DeleteModal alertText={alertText} setShow={setShow} />}
    </div>
  );
};

export default SettingBlockDeleteAcc;

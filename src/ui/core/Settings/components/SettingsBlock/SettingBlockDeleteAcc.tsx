import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../SettingPage.module.scss";
import DeleteModal from "../modal/components/DeleteModal";

const SettingBlockDeleteAcc = (): ReactElement => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.textBlock}>
      <h2>{t("settingsPage.delAcc")}</h2>
      <button type="button" onClick={(): any => setShow(true)}>
        {t("settingsPage.del")}
      </button>
      {show && <DeleteModal setShow={setShow} />}
    </div>
  );
};

export default SettingBlockDeleteAcc;

import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import styles from "../AuthPage.module.scss";

const ButtonForgot = (props: any): ReactElement => {
  const { t } = useTranslation();
  const { sign } = props;
  const { signUp } = props;
  return (
    <div>
      {!signUp && (
        <div className={styles.linkForgot}>
          <a href="/#">{t("authBlock.forgotPas")}</a>
        </div>
      )}
      <button type="submit" className={styles.buttonEnable}>
        {sign}
      </button>
    </div>
  );
};

export default ButtonForgot;

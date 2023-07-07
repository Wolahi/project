import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "../SettingModalPage.module.scss";

const InputChangedEmail = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder={String(t("settingsPage.InputEmail"))}
        id="emailChanged"
        type="email"
        required
        {...register("emailChanged")}
      />
      <div className={styles.error}>
        {errors.emailChanged && (errors.emailChanged.message as string)}
      </div>
    </div>
  );
};
export default InputChangedEmail;

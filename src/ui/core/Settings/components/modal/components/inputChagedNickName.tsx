import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "../SettingModalPage.module.scss";

const InputChangedNickName = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder={String(t("settingsPage.InputNickName"))}
        id="userNameChanged"
        type="text"
        {...register("userNameChanged")}
      />
      <div className={styles.error}>
        {errors.userNameChanged && (errors.userNameChanged.message as string)}
      </div>
    </div>
  );
};
export default InputChangedNickName;

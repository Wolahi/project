import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import styles from "../AuthPage.module.scss";
import useDataReg from "../SignUpComponents/SignUPData";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const InputUserName = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useDataReg();
  const translation = useTranslations();
  return (
    <div>
      <label htmlFor="Name" className={styles["input-block"]}>
        <span className={valid.userNameForLabel.topLabel ? styles["label-top"] : styles.hide}>
          {translation.text.name}
        </span>
        <input
          id="Name"
          type="text"
          onAnimationStart={(e): void => {
            valid.userNameForLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            valid.userNameForLabel.onFocus();
          }}
          {...register("userName", {
            onChange: (e): void => {
              valid.userNameForLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              valid.userNameForLabel.onBlur();
            },
          })}
        />
      </label>
      {errors.userName ? (
        <div className={styles.error}>{errors.userName.message as string}</div>
      ) : (
        <div style={{ height: "16px" }} />
      )}
    </div>
  );
};

export default InputUserName;

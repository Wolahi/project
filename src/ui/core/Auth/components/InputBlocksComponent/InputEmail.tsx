import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import styles from "../AuthPage.module.scss";
import useDataReg from "../SignUpComponents/SignUPData";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const InputEmail = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useDataReg();
  const translation = useTranslations();
  return (
    <div>
      <label htmlFor="Email" className={styles["input-block"]}>
        <span className={valid.emailForLabel.topLabel ? styles["label-top"] : styles.hide}>
          {translation.text.email}
        </span>
        <input
          id="Email"
          type="email"
          onAnimationStart={(e): void => {
            valid.emailForLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            valid.emailForLabel.onFocus();
          }}
          {...register("email", {
            onChange: (e): void => {
              valid.emailForLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              valid.emailForLabel.onBlur();
            },
          })}
        />
      </label>
      {errors.email ? (
        <div className={styles.error}>{errors.email.message as string}</div>
      ) : (
        <div style={{ height: "16px" }} />
      )}
    </div>
  );
};

export default InputEmail;

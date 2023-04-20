import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
import styles from "../AuthPage.module.scss";
import useData from "../AuthPageData";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const InputEmail = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useData();
  const validLabel = valid.emailForLabel;
  const translation = useTranslations();
  return (
    <div>
      <label htmlFor="Email" className={styles.inputBlock}>
        <span className={clsx(styles.hide, { [styles.labelTop]: validLabel.topLabel })}>
          {translation.text.email}
        </span>
        <input
          id="Email"
          type="email"
          onAnimationStart={(e): void => {
            validLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            validLabel.onFocus();
          }}
          {...register("email", {
            onChange: (e): void => {
              validLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              validLabel.onBlur();
            },
          })}
        />
      </label>
      <div className={styles.error}>{errors.email && (errors.email.message as string)}</div>
    </div>
  );
};

export default InputEmail;

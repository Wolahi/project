import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
import styles from "../AuthPage.module.scss";
import useData from "../AuthPageData";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const InputUserName = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useData();
  const validLabel = valid.userNameForLabel;
  const translation = useTranslations();
  return (
    <div>
      <label htmlFor="Name" className={styles.inputBlock}>
        <span className={clsx(styles.hide, { [styles.labelTop]: validLabel.topLabel })}>
          {translation.text.name}
        </span>
        <input
          id="Name"
          type="text"
          onAnimationStart={(e): void => {
            validLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            validLabel.onFocus();
          }}
          {...register("userName", {
            onChange: (e): void => {
              validLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              validLabel.onBlur();
            },
          })}
        />
      </label>
      <div className={styles.error}>{errors.userName && (errors.userName.message as string)}</div>
    </div>
  );
};

export default InputUserName;

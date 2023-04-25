import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "react-i18next";
import styles from "../AuthPage.module.scss";
import useData from "../AuthPageData";

const InputUserName = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useData();
  const validLabel = valid.userNameForLabel;
  const { t } = useTranslation();
  return (
    <div>
      <label htmlFor="Name" className={styles.inputBlock}>
        <span className={clsx(styles.hide, { [styles.labelTop]: validLabel.topLabel })}>
          {t("authBlock.name")}
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

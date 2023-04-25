import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "react-i18next";
import styles from "../AuthPage.module.scss";
import useData from "../AuthPageData";

const InputPass = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useData();
  const validLabel = valid.passwordForLabel;
  const validVisibility = valid.passwordVisibility;
  const { t } = useTranslation();
  return (
    <div>
      <label htmlFor="Password" className={styles.inputBlock}>
        <span className={clsx(styles.hide, { [styles.labelTop]: validLabel.topLabel })}>
          {t("authBlock.password")}
        </span>
        <input
          id="Password"
          type={validVisibility.typeVis}
          onAnimationStart={(e): void => {
            validLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            validLabel.onFocus();
          }}
          {...register("password", {
            onChange: (e): void => {
              validLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              validLabel.onBlur();
            },
          })}
        />
        <button
          type="button"
          className={styles.eye}
          onClick={(): void => {
            validVisibility.changeVis();
          }}>
          {validVisibility.typeVis === "password" ? (
            <AiOutlineEyeInvisible size={25} />
          ) : (
            <AiOutlineEye size={25} />
          )}
        </button>
      </label>
      <div className={styles.error}>{errors.password && (errors.password.message as string)}</div>
    </div>
  );
};

export default InputPass;

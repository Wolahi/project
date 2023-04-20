import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
import styles from "../AuthPage.module.scss";
import useData from "../AuthPageData";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const InputSubmitPass = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useData();
  const validLabel = valid.submitPasForLabel;
  const validVisibility = valid.submitPasVisibility;
  const translation = useTranslations();
  return (
    <div>
      <label htmlFor="SubmitPassword" className={styles.inputBlock}>
        <span className={clsx(styles.hide, { [styles.labelTop]: validLabel.topLabel })}>
          {translation.text.submitPass}
        </span>
        <input
          id="SubmitPassword"
          type={validVisibility.typeVis}
          onAnimationStart={(e): void => {
            validLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            validLabel.onFocus();
          }}
          {...register("submitPassword", {
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
      <div className={styles.error}>
        {errors.submitPassword && (errors.submitPassword.message as string)}
      </div>
    </div>
  );
};

export default InputSubmitPass;

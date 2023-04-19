import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../AuthPage.module.scss";
import useData from "../AuthPageData";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const InputPass = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useData();
  const translation = useTranslations();
  return (
    <div>
      <label htmlFor="Password" className={styles["input-block"]}>
        <span className={valid.passwordForLabel.topLabel ? styles["label-top"] : styles.hide}>
          {translation.text.password}
        </span>
        <input
          id="Password"
          type={valid.passwordVisibility.typeVis}
          onAnimationStart={(e): void => {
            valid.passwordForLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            valid.passwordForLabel.onFocus();
          }}
          {...register("password", {
            onChange: (e): void => {
              valid.passwordForLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              valid.passwordForLabel.onBlur();
            },
          })}
        />
        <button
          type="button"
          className={styles.eye}
          onClick={(): void => {
            valid.passwordVisibility.changeVis();
          }}>
          {valid.passwordVisibility.typeVis === "password" ? (
            <AiOutlineEyeInvisible size={25} />
          ) : (
            <AiOutlineEye size={25} />
          )}
        </button>
      </label>
      {errors.password ? (
        <div className={styles.error}>{errors.password.message as string}</div>
      ) : (
        <div style={{ height: "12px" }} />
      )}
    </div>
  );
};

export default InputPass;

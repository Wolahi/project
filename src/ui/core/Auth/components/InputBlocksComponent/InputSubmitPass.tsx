import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../AuthPage.module.scss";
import useDataReg from "../SignUpComponents/SignUPData";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const InputSubmitPass = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useDataReg();
  const translation = useTranslations();
  return (
    <div>
      <label htmlFor="SubmitPassword" className={styles["input-block"]}>
        <span className={valid.submitPasForLabel.topLabel ? styles["label-top"] : styles.hide}>
          {translation.text.submitPass}
        </span>
        <input
          id="SubmitPassword"
          type={valid.submitPasVisibility.typeVis}
          onAnimationStart={(e): void => {
            valid.submitPasForLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            valid.submitPasForLabel.onFocus();
          }}
          {...register("submitPassword", {
            onChange: (e): void => {
              valid.submitPasForLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              valid.submitPasForLabel.onBlur();
            },
          })}
        />
        <button
          type="button"
          className={styles.eye}
          onClick={(): void => {
            valid.submitPasVisibility.changeVis();
          }}>
          {valid.submitPasVisibility.typeVis === "password" ? (
            <AiOutlineEyeInvisible size={25} />
          ) : (
            <AiOutlineEye size={25} />
          )}
        </button>
      </label>
      {errors.submitPassword ? (
        <div className={styles.error}>{errors.submitPassword.message as string}</div>
      ) : (
        <div style={{ height: "12px" }} />
      )}
    </div>
  );
};

export default InputSubmitPass;

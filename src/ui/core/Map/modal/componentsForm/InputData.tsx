import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import styles from "../ModalCreate.module.scss";
import useLabel from "../../../../hooks/HooksAuth/useLabel";

const InputData = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const validLabel = useLabel("");
  return (
    <div>
      <label htmlFor="Data" className={styles.inputBlock}>
        <span className={styles.labelTop}>Data</span>
        <input
          id="Data"
          type="datetime-local"
          onAnimationStart={(e): void => {
            validLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            validLabel.onFocus();
          }}
          {...register("data")}
        />
      </label>
      <div className={styles.error}>{errors.name && (errors.name.message as string)}</div>
    </div>
  );
};

export default InputData;

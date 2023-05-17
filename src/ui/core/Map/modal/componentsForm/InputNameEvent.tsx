import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
import styles from "../ModalCreate.module.scss";
import useLabel from "../../../../hooks/HooksAuth/useLabel";

const InputNameEvent = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const validLabel = useLabel("");
  return (
    <div>
      <label htmlFor="NameEvent" className={styles.inputBlock}>
        <span className={clsx(styles.hide, { [styles.labelTop]: validLabel.topLabel })}>
          Name Event
        </span>
        <input
          id="NameEvent"
          type="text"
          onAnimationStart={(e): void => {
            validLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            validLabel.onFocus();
          }}
          {...register("name_event", {
            onChange: (e): void => {
              validLabel.onChange(e.target.value);
            },
            onBlur: (): void => {
              validLabel.onBlur();
            },
          })}
        />
      </label>
      <div className={styles.error}>{errors.name && (errors.name.message as string)}</div>
    </div>
  );
};

export default InputNameEvent;

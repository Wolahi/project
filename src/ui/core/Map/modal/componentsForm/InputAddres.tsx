import React, { ReactElement, memo, useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line
import { Point } from "ol/geom";
import clsx from "clsx";
import styles from "../ModalCreate.module.scss";
import useLabel from "../../../../hooks/HooksAuth/useLabel";
import useMap from "../../MapController";

const InputAddres = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const validLabel = useLabel("");
  const [val, setVal] = useState("");
  const map = useMap();
  let addres = "";
  useEffect((): void => {
    (async (): Promise<void> => {
      addres = await map.fillAddress(new Point(map.point));
      setVal(addres);
    })();
  }, []);
  return (
    <div>
      <label htmlFor="Addres" className={styles.inputBlock}>
        <span className={clsx(styles.hide, { [styles.labelTop]: validLabel.topLabel })}>
          Address
        </span>
        <input
          id="Addres"
          type="text"
          value={val}
          onAnimationStart={(e): void => {
            validLabel.handleAutoFill(e);
          }}
          onClick={(): void => {
            validLabel.onFocus();
          }}
          {...register("addres", {
            onChange: (e): void => {
              validLabel.onChange(e.target.value);
              setVal(e.target.value);
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

export default memo(InputAddres);

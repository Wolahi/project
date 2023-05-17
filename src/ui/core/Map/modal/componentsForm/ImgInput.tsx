import { ReactElement } from "react";
import styles from "../ModalCreate.module.scss";

const ButtonSubmit = (): ReactElement => {
  return (
    <div className={styles.inputFileBlock}>
      <label htmlFor="file" className={styles.input_file}>
        <input id="file" type="file" name="file" accept=".png" />
        <span>Choose img .PNG</span>
      </label>
    </div>
  );
};

export default ButtonSubmit;

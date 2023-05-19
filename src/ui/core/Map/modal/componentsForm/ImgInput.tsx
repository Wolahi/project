import { ReactElement } from "react";
import styles from "../ModalCreate.module.scss";
import useImg from "../../../../hooks/HooksMap/useImg";

const ButtonSubmit = (): ReactElement => {
  const imgInput = useImg();
  return (
    <div className={styles.inputFileBlock}>
      {imgInput.img !== null && <img src={imgInput.img} alt="" />}
      <label htmlFor="file" className={styles.input_file}>
        <input
          id="file"
          type="file"
          name="file"
          accept=".jpg"
          onChange={(e: any): void => imgInput.onChange(e)}
        />
        <span>Choose img .JPG</span>
      </label>
    </div>
  );
};

export default ButtonSubmit;

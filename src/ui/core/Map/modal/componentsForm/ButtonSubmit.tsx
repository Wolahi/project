import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../ModalCreate.module.scss";

const ButtonSubmit = (): ReactElement => {
  const { getValues } = useFormContext();
  return (
    <button
      type="button"
      className={styles.buttonEnable}
      onClick={(): void => console.log(getValues())}>
      Create
    </button>
  );
};

export default ButtonSubmit;

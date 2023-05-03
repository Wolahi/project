import { ReactElement } from "react";
import styles from "./ModalChoose.module.scss";

const ModalChoose = (props: any): ReactElement => {
  const { setView } = props;
  return (
    <div className={styles.root}>
      <button type="button" className={styles.text}>
        Create an event?
      </button>
      <button type="button" onClick={(): void => setView(false)} className={styles.close}>
        <div className={styles.svgClose} />
      </button>
    </div>
  );
};

export default ModalChoose;

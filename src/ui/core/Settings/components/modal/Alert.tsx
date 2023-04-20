import { ReactElement } from "react";
import styles from "./Alert.module.scss";

const Alert = ({
  active,
  setActive,
  text,
}: {
  active: boolean;
  setActive: any;
  text: string;
}): ReactElement => {
  return (
    <div>
      {active && (
        <div className={styles.alertPosition}>
          <div className={styles.alert}>
            <div className={styles.text}>{text}</div>
            <button type="button" onClick={(): void => setActive(false)}>
              <div className={styles.svgClose}> </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;

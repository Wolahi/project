import { ReactElement, useEffect, useState } from "react";
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
  const [hideAlert, setHideAlert] = useState(false);
  let timeIdHide: any;
  useEffect(() => {
    const timeId = setTimeout(() => {
      // eslint-disable-next-line
      timeIdHide = setTimeout(() => {
        setActive(false);
      }, 1000);
      setHideAlert(true);
    }, 4000);
    return () => {
      clearTimeout(timeId);
      clearTimeout(timeIdHide);
      setHideAlert(false);
    };
    // eslint-disable-next-line
  }, [active]);
  useEffect(() => {
    if (active && text !== "") {
      setActive(false);
      setTimeout(() => {
        setActive(true);
      }, 1);
    }
    // eslint-disable-next-line
  }, [text]);
  return (
    <div>
      {active ? (
        <div className={styles.alertPosition}>
          <div className={!hideAlert ? styles.alert : styles.alertClose}>
            <div className={styles.text}>{text}</div>
            <button
              type="button"
              onClick={(): void => {
                setActive(false);
                setHideAlert(false);
              }}>
              <div className={styles.svgClose}> </div>
            </button>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default Alert;

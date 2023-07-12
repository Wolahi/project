import React, { ReactElement } from "react";
import styles from "./moadal.module.scss";

const MapModal = (props: any): ReactElement => {
  const { setShow, setFeatures, features, point } = props;
  return (
    <div className={styles.modal}>
      <button type="button" className={styles.close} onClick={(): any => setShow(false)}>
        <div className={styles.svgClose}> </div>
      </button>
      <div className={styles.modalHeader}>
        <h4>Создайте свое мероприятие!</h4>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.modalInput}>
          <label htmlFor="Name">Выберите название для своего мероприятия:</label>
          <input type="text" id="Name" placeholder="Название мероприятия" />
          <label htmlFor="Date">Выберите дату проведения:</label>
          <input type="date" id="Date" />
          <label htmlFor="Discription">Кратко опишите ваше мероприятие:</label>
          <textarea className={styles.Discription} placeholder="Описание" id="Discription" />
        </div>
        <button
          onClick={() => {
            const points = features;
            points.push(point);
            setFeatures(points);
            setShow(false);
          }}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default MapModal;

import React, { ReactElement } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import styles from "./moadal.module.scss";

const MapPoint = (): ReactElement => {
  return (
    <div className={styles.point}>
      <BsFillGeoAltFill size={25} color="red" />
    </div>
  );
};

export default MapPoint;

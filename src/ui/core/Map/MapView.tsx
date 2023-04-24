import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-unresolved
import { fromLonLat } from "ol/proj";
import { RMap, ROSM } from "rlayers";
import styles from "./Map.module.scss";

const MapView = (): ReactElement => {
  const center = fromLonLat([39.1843, 51.672]);
  return (
    <RMap className={styles.root} initial={{ center, zoom: 11 }}>
      <ROSM />
    </RMap>
  );
};

export default MapView;

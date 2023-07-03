import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-unresolved
import { fromLonLat } from "ol/proj";
import { RGeolocation, RMap, ROSM } from "rlayers";
import { Geolocation } from "ol";
import styles from "./Map.module.scss";

const MapView = (): ReactElement => {
  const center = fromLonLat([0, 0]);
  return (
    <RMap className={styles.root} initial={{ center, zoom: 11 }}>
      <ROSM />
      <RGeolocation
        tracking
        trackingOptions={{ enableHighAccuracy: true }}
        // eslint-disable-next-line react/destructuring-assignment,react/no-this-in-sfc
        onChange={React.useCallback(function fn(e: any) {
          const geolocation = e.target as Geolocation;
          // eslint-disable-next-line react/destructuring-assignment,react/no-this-in-sfc
          this.context.map.getView().fit(geolocation.getAccuracyGeometry(), {
            duration: 250,
            maxZoom: 11,
          });
        }, [])}
      />
    </RMap>
  );
};

export default MapView;

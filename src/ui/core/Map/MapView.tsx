import React, { ReactElement, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { fromLonLat } from "ol/proj";
import { RGeolocation, RMap, ROSM } from "rlayers";
import { Geolocation } from "ol";
import styles from "./Map.module.scss";
import store from "../../../redux/store/Store";
import { SetText, ShowAlert } from "../../../redux/actuons";

const MapView = (): ReactElement => {
  useEffect(() => {
    if (store.getState().alert.ShowAlert) {
      store.dispatch(ShowAlert(false));
      store.dispatch(SetText(" "));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <RMap className={styles.root} initial={view} view={[view, setView]}>
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

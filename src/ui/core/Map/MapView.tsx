import React, { ReactElement, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { RGeolocation, RMap, ROSM } from "rlayers";
import { Geolocation } from "ol";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
import styles from "./Map.module.scss";
import store from "../../../redux/store/Store";
import { SetText, SetView, ShowAlert } from "../../../redux/actions";

const MapView = (): ReactElement => {
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = new Cookies();
    const currentUser = cookies.get("user");
    if (!currentUser) {
      navigate("/auth/signIn");
    }
    if (store.getState().alert.ShowAlert) {
      store.dispatch(ShowAlert(false));
      store.dispatch(SetText(" "));
    }
    // eslint-disable-next-line
  }, []);
  let view = store.getState().map;

  return (
    <RMap
      className={styles.root}
      initial={view.map ? view.map : view}
      onMoveEnd={(e): any => {
        const newView = {
          center: e.frameState?.viewState.center,
          zoom: e.frameState?.viewState.zoom,
        };
        store.dispatch(SetView(newView));
        view = store.getState().map;
      }}>
      <ROSM />
      {!view.map && (
        <RGeolocation
          tracking
          trackingOptions={{ enableHighAccuracy: true }}
          // eslint-disable-next-line
          onChange={React.useCallback(function fn(e: any) {
            const geolocation = e.target as Geolocation;
            // eslint-disable-next-line react/destructuring-assignment,react/no-this-in-sfc
            this.context.map.getView().fit(geolocation.getAccuracyGeometry(), {
              duration: 250,
              maxZoom: 11,
            });
          }, [])}
        />
      )}
    </RMap>
  );
};

export default MapView;

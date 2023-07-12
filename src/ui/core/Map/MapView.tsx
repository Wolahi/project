import React, { ReactElement, useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { RFeature, RGeolocation, RLayerVector, RMap, ROSM, ROverlay } from "rlayers";
// eslint-disable-next-line import/no-unresolved
import { Point } from "ol/geom";
import { Feature, Geolocation } from "ol";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
import styles from "./Map.module.scss";
import store from "../../../redux/store/Store";
import { SetText, ShowAlert } from "../../../redux/actions";
import MapModal from "./components/modal";
import MapPoint from "./components/point";

const MapView = (): ReactElement => {
  const navigate = useNavigate();
  const [point, setPoint] = useState<any>();
  const [show, setShow] = useState(false);
  const [features, setFeatures] = useState<any>([]);
  const vectorRef = React.useRef() as React.RefObject<RLayerVector>;
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

  return (
    <RMap
      className={styles.root}
      initial={{ center: [0, 0], zoom: 11 }}
      onClick={(e): any => {
        const coords = e.map.getCoordinateFromPixel(e.pixel);
        const newPoint = new Feature({ geometry: new Point(coords) });
        setPoint(newPoint);
        setShow(false);
        setTimeout(() => {
          setShow(true);
        }, 5);
      }}>
      <ROSM />
      <RLayerVector ref={vectorRef}>
        {show && (
          <RFeature feature={point}>
            <ROverlay>
              <MapModal
                setShow={setShow}
                setFeatures={setFeatures}
                point={point}
                features={features}
              />
            </ROverlay>
          </RFeature>
        )}
        {features.map((f: any, i = 0) => (
          /* eslint-disable no-plusplus */
          <RFeature key={++i} feature={f}>
            <ROverlay>
              <MapPoint />
            </ROverlay>
          </RFeature>
        ))}
      </RLayerVector>
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
    </RMap>
  );
};

export default MapView;

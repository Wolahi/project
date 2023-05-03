import React, { ReactElement, useRef, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { fromLonLat } from "ol/proj";
import { RFeature, RGeolocation, RLayerVector, RMap, ROSM, ROverlay } from "rlayers";
import { Geolocation } from "ol";
// eslint-disable-next-line import/no-unresolved
import { Point } from "ol/geom";
import styles from "./Map.module.scss";
import ModalChoose from "./modal/ModalChoose";

const MapView = (): ReactElement => {
  const [point, setPoint] = useState(new Point([0, 0]));
  const [view, setView] = useState(true);
  const center = fromLonLat([37.617698, 55.755864]);
  const vectorRef = useRef() as React.RefObject<RLayerVector>;
  return (
    <RMap
      className={styles.root}
      initial={{ center, zoom: 11 }}
      onClick={(e: any): void => {
        const coords = e.map.getCoordinateFromPixel(e.pixel);
        setPoint(new Point(coords));
        setView(true);
      }}>
      <ROSM />
      <RGeolocation
        tracking
        trackingOptions={{ enableHighAccuracy: true }}
        onChange={React.useCallback(function (e: any) {
          const geolocation = e.target as Geolocation;
          // eslint-disable-next-line react/destructuring-assignment,react/no-this-in-sfc
          this.context.map.getView().fit(geolocation.getAccuracyGeometry(), {
            duration: 250,
            maxZoom: 11,
          });
        }, [])}
      />
      {view && (
        <RLayerVector ref={vectorRef}>
          <RFeature geometry={point}>
            <ROverlay>
              <ModalChoose setView={setView} />
            </ROverlay>
          </RFeature>
        </RLayerVector>
      )}
    </RMap>
  );
};

export default MapView;

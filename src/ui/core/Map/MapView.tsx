import React, { ReactElement, useRef, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { RFeature, RGeolocation, RLayerVector, RMap, ROSM, ROverlay } from "rlayers";
import { Geolocation } from "ol";
// eslint-disable-next-line import/no-unresolved
import { Point } from "ol/geom";
import styles from "./Map.module.scss";
import ModalChoose from "./modal/ModalChoose";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";
import useActions from "../../../shared/hooks/map/useMapActions";

const MapView = (): ReactElement => {
  const [point, setPoint] = useState(new Point([0, 0]));
  const { mapCenter } = useTypedSelector((state) => state);
  const [isLoading, setLoad] = useState(mapCenter.center[0] === 0);
  const { addToMapCenter } = useActions();
  const [view, setView] = useState(false);
  const vectorRef = useRef() as React.RefObject<RLayerVector>;
  return (
    <div className={styles.root}>
      {isLoading && <div className={styles.load}>Loading...</div>}
      <RMap
        className={styles.map}
        initial={mapCenter}
        onClick={(e: any): void => {
          if (!isLoading) {
          }
          const coords = e.map.getCoordinateFromPixel(e.pixel);
          setPoint(new Point(coords));
          setView(true);
        }}
        onMoveEnd={(e: any): void => {
          const cent: number[] = e.map.getView().getCenter();
          // eslint-disable-next-line
          const zoomMap = e.map.getView().values_.zoom;
          const data = {
            center: cent,
            zoom: zoomMap,
          };
          addToMapCenter(data);
        }}>
        {!isLoading && <ROSM />}
        <RGeolocation
          tracking
          trackingOptions={{ enableHighAccuracy: true }}
          // eslint-disable-next-line
          onChange={React.useCallback(function (e: any) {
            const geolocation = e.target as Geolocation;
            // eslint-disable-next-line react/destructuring-assignment,react/no-this-in-sfc
            this.context.map.getView().fit(geolocation.getAccuracyGeometry(), {
              duration: 250,
              maxZoom: 11,
            });

            // eslint-disable-next-line react/destructuring-assignment,react/no-this-in-sfc
            const data = {
              // eslint-disable-next-line
              center: this.context.map.getView().getCenter(),
              // eslint-disable-next-line
              zoom: this.context.map.getView().values_.zoom,
            };
            setLoad(false);
            addToMapCenter(data);
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
    </div>
  );
};

export default MapView;

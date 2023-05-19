import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-unresolved
import { RFeature, RGeolocation, RLayerVector, RMap, ROSM, ROverlay } from "rlayers";
import { Geolocation } from "ol";
// eslint-disable-next-line import/no-unresolved
import { Point } from "ol/geom";
import styles from "./Map.module.scss";
import ModalChoose from "./modal/ModalChoose";
import ModalCreate from "./modal/ModalCreateEvent";
import useMap from "./MapController";

const MapView = (): ReactElement => {
  const map = useMap();
  return (
    <div className={styles.root}>
      {map.viewGlobal && <ModalCreate setView={map.setViewGlob} />}
      {map.isLoading && <div className={styles.load}>Loading...</div>}
      <RMap
        className={styles.map}
        initial={map.mapCenter}
        onClick={(e: any): void => map.spawnPoint(e)}
        onMoveEnd={(e: any): void => map.saveCoords(e)}>
        {!map.isLoading && <ROSM />}
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
            const coords = {
              // eslint-disable-next-line
              center: this.context.map.getView().getCenter(),
              // eslint-disable-next-line
              zoom: this.context.map.getView().values_.zoom,
            };
            map.setLoad(false);
            map.addToMapCenter(coords);
          }, [])}
        />
        {map.view && (
          <RLayerVector ref={map.vectorRef}>
            <RFeature geometry={new Point(map.point)}>
              <ROverlay>
                <ModalChoose setView={map.setView} setViewGlob={map.setViewGlob} />
              </ROverlay>
            </RFeature>
          </RLayerVector>
        )}
      </RMap>
    </div>
  );
};

export default MapView;

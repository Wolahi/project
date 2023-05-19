// eslint-disable-next-line
import { Point } from "ol/geom";
// eslint-disable-next-line
import { transform } from "ol/proj";
import { RLayerVector } from "rlayers";
import { useRef, useState } from "react";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";
import useActions from "../../../shared/hooks/map/useMapActions";

const useMap = (): any => {
  const { mapCenter, point } = useTypedSelector((state) => state);
  const [isLoading, setLoad] = useState(mapCenter.center[0] === 0);
  const { addToMapCenter, addPoint } = useActions();
  const [view, setView] = useState(false);
  const [viewGlobal, setViewGlob] = useState(false);
  const vectorRef = useRef() as React.RefObject<RLayerVector>;

  const spawnPoint = (e: any): void => {
    const coords = e.map.getCoordinateFromPixel(e.pixel);
    addPoint(coords);
    setView(true);
  };

  const saveCoords = (e: any): void => {
    const cent: number[] = e.map.getView().getCenter();
    // eslint-disable-next-line
    const zoomMap = e.map.getView().values_.zoom;
    const coords = {
      center: cent,
      zoom: zoomMap,
    };
    addToMapCenter(coords);
  };

  const fillAddress = async (pointCheck: Point): Promise<string> => {
    if (pointCheck === null) return Promise.resolve("");
    const coordsWGS = transform(pointCheck.getCoordinates(), "EPSG:3857", "EPSG:4326");
    const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${coordsWGS[0]}&lat=${coordsWGS[1]}`;
    return fetch(URL)
      .then((r) => r.json())
      .then((data) => data.display_name)
      .catch((e) => e.message);
  };
  return {
    spawnPoint,
    saveCoords,
    point,
    addPoint,
    mapCenter,
    isLoading,
    addToMapCenter,
    view,
    setView,
    viewGlobal,
    setViewGlob,
    vectorRef,
    setLoad,
    fillAddress,
  };
};

export default useMap;

import React, { ReactElement } from "react";
import SideBarView from "../../core/SideBar/SideBarView";
import MapView from "../../core/Map/MapView";

function MapPage(): ReactElement {
  return (
    <div>
      <SideBarView />
      <MapView />
    </div>
  );
}

export default MapPage;

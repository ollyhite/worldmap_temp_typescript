import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { ReactElement } from "react";
import Map from "react-map-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xseWhpdGUiLCJhIjoiY2xhcmR1bGcyMDRxMjNvbXMxY3lnZ2xqOSJ9.Y3YUFKRACl5_8-jIo5LRoQ";

export const MapBox = (): ReactElement => {
  const [viewState, setViewState] = React.useState({
    longitude: 0,
    latitude: 0,
    zoom: 0,
  });

  return (
    <Map
      {...viewState}
      style={{ width: 800, height: 600 }}
      dragPan={true}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    ></Map>
  );
};

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { ReactElement } from "react";
import Map from "react-map-gl";

mapboxgl.accessToken = process.env?.REACT_APP_MAP_BOX_TOKEN ?? "no_token";

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

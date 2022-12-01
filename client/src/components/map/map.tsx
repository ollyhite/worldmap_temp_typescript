import React, { FC, ReactElement, useContext } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MdLocationOn } from "react-icons/md";
import Map, { Marker } from "react-map-gl";
import { TempContext } from "../../utils/TempContext";
import { TempUnit } from "../../..";

mapboxgl.accessToken = process.env?.REACT_APP_MAP_BOX_TOKEN ?? "no_token";

export const MapBox: FC = (): ReactElement => {
  const [viewState, setViewState] = React.useState({
    longitude: 0,
    latitude: 0,
  });
  const { points: rawPoints, unit, zoom } = useContext(TempContext);

  const points = rawPoints.map((point) => {
    return {
      lat: Number(point.lat),
      lon: Number(point.lon),
      temp: Number(point.temp),
    };
  });
  const [centerPoint] = points;

  const mapProps = {
    longitude: Number(centerPoint?.lon ?? viewState.longitude),
    latitude: Number(centerPoint?.lat ?? viewState.latitude),
    // zoom:zoom
    zoom,
  };

  const showByUnit = (temp: number, unit: TempUnit) => {
    if (unit === "f") {
      return temp;
    }
    return (((Number(temp) - 32) * 5) / 9).toFixed(2);
  };

  return (
    <Map
      {...mapProps}
      style={{ width: 800, height: 600 }}
      dragPan={true}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {points.map(({ lat, lon, temp }, index) => (
        <Marker
          key={lat + "__" + lon + "__" + index}
          longitude={Number(lon)}
          latitude={Number(lat)}
          anchor="bottom"
        >
          <MdLocationOn />
          {showByUnit(temp, unit)} {unit.toUpperCase()}
        </Marker>
      ))}
    </Map>
  );
};

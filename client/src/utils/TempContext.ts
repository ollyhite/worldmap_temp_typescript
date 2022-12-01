import { createContext } from "react";
import { MapPoint, TempUnit } from "../..";

interface TempStore {
  points: MapPoint[];
  setPoints: (points: MapPoint[]) => void | MapPoint[];
  unit: TempUnit;
  setUnit: (temp: TempUnit) => void;
  zoom: number;
  setZoom: (newZoom: number) => void;
}

export const TempContext = createContext<TempStore>({
  points: [],
  setPoints: null,
  unit: "f",
  zoom: 0,
} as any);

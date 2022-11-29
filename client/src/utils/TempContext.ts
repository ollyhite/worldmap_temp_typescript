import { createContext } from "react";
import { MapPoint, TempUnit } from "../..";

export const TempContext = createContext<{
  points: MapPoint[];
  setPoints: (points: MapPoint[]) => void | MapPoint[];
  unit: TempUnit;
  setUnit: (temp: TempUnit) => void;
}>({
  points: [],
  setPoints: null,
  unit: "f",
} as any);

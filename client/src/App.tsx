import React, { FC, ReactElement, useState } from "react";
import { MapPoint } from "..";
import { Dashboard } from "./pages/dashboard";
import { TempContext } from "./utils/TempContext";

const App: FC = (): ReactElement => {
  const [points, setPoints] = useState<MapPoint[]>([]);
  const [unit, setUnit] = useState<"c" | "f">("f");
  const [zoom, setZoom] = useState(0);
  const store = { points, setPoints, unit, setUnit, zoom, setZoom };

  return (
    <TempContext.Provider value={store}>
      <div className="wrapper">
        <Dashboard />
      </div>
    </TempContext.Provider>
  );
};

export default App;

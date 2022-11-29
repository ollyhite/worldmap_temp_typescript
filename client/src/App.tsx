import React, { FC, ReactElement, useState } from "react";
import { Dashboard } from "./pages/dashboard";

const App: FC = (): ReactElement => {
  return (
    <div className="wrapper">
      <Dashboard />
    </div>
  );
};

export default App;

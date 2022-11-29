import React, { FC, ReactElement, useRef, SyntheticEvent } from "react";
import { ImFolderUpload } from "react-icons/im";
import { FaTemperatureHigh } from "react-icons/fa";
import logo from "../images/weather_logo.svg";
import { makeTest } from "../../utils/data-utils";

export const Sidebar: FC = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);

  // //test api to backend
  // const testApi = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   makeTest({ url: "/test" })
  //     .then(async (res: any) => console.log(res))
  //     .catch((err: any) => console.trace(err));
  // };

  

  return (
    <div className="meau">
      <form ref={formRef}>
        <div className="logo">
          <img src={logo} alt="Logo Images" />
          <h1>Temp Map</h1>
        </div>

        <input
          type="file"
          // style={{ display: "none" }}
        />
        <button className="list">
          <ImFolderUpload />
          <h1>Upload File</h1>
        </button>
      </form>
      <button className="list">
        <FaTemperatureHigh />
        <h1>Change C/F</h1>
      </button>
    </div>
  );
};

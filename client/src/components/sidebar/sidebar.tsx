import React, {
  FC,
  ReactElement,
  useRef,
  SyntheticEvent,
  useState,
  useContext,
} from "react";
import { ImFolderUpload, ImCancelCircle } from "react-icons/im";
import { FaTemperatureHigh } from "react-icons/fa";
import logo from "../images/weather_logo.svg";
import { makeTest, updateFile, makeRequest } from "../../utils/data-utils";
import { TempContext } from "../../utils/TempContext";
import { MapPoint } from "../../..";

export const Sidebar: FC = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState("");
  const { setPoints } = useContext(TempContext);

  // //test api to backend
  // const testApi = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   makeTest({ url: "/test" })
  //     .then(async (res: any) => console.log(res))
  //     .catch((err: any) => console.trace(err));
  // };
  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) {
      return;
    }

    // handle the input...
    console.log("file", e.target.files);
    console.log("file", e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target);
      const target = e.target;
      const result = target?.result as string;
      console.log({ result });
      setFile(result);
    };
  };
  const handleSendUpload = (e: SyntheticEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    updateFile(data);
    loadPoints();
  };

  const resetForm = () => {
    formRef.current?.reset();
    setFile("");
    clearPoints();
  };

  //locat point api
  const loadPoints = () => {
    makeRequest({ url: "/points" })
      .then(async (res) => setPoints((await res.json()) as any as MapPoint[]))
      .catch((err) => console.trace(err));
  };

  //clear point api
  const clearPoints = () => {
    makeRequest({ url: "/clear-points" })
      .then(async (res) => setPoints((await res.json()) as any as MapPoint[]))
      .catch((err) => console.trace(err));
  };
  console.log(file);

  return (
    <div className="meau">
      <form ref={formRef} onSubmit={handleSendUpload}>
        <div className="logo">
          <img src={logo} alt="Logo Images" />
          <h1>Temp Map</h1>
        </div>

        <input
          type="file"
          onChange={handleFileInputChange}
          // style={{ display: "none" }}
        />
        {/* if have data, btn disable to clear */}
        <button onClick={resetForm} className="list" disabled={!file.length}>
          <ImCancelCircle />
          <h1>Clear</h1>
        </button>
        {/* if clear data, btn disable to update */}
        <button className="list" disabled={!file.length}>
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

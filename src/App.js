import React from "react";
import DFXMapViewer from "./DFXMapViewer";

const App = () => {
  const dfxFile = "/path/to/your/dfx/file.dfx";
  const coordinates = {
    latitude: 51.5074, // Example latitude
    longitude: -0.1278, // Example longitude
  };

  return (
    <div>
      <h1>DFX Map Viewer</h1>
      <DFXMapViewer dfxFile={dfxFile} coordinates={coordinates} />
    </div>
  );
};

export default App;

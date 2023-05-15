import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet"; // Import from 'react-leaflet' instead of 'leaflet'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const DFXMapViewer = ({ dfxFile, coordinates }) => {
  const mapRef = useRef();
  const geoJSONRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(dfxFile, (gltf) => {
      const scene = gltf.scene;

      // Adjust the position of the model based on the georeferenced coordinates
      scene.position.set(coordinates.longitude, coordinates.latitude, 0);

      // Add the model to the map as a GeoJSON layer
      // eslint-disable-next-line no-undef
      geoJSONRef.current = L.geoJSON(scene, {
        style: {
          color: "#ff0000",
          opacity: 0.7,
        },
      });

      // Add the GeoJSON layer to the map
      geoJSONRef.current.addTo(mapRef.current);
    });
  }, [dfxFile, coordinates]);

  return (
    <MapContainer
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      whenCreated={(map) => {
        mapRef.current = map;
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
    </MapContainer>
  );
};

export default DFXMapViewer;

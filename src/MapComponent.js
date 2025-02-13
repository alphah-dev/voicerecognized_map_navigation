import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Custom Hook to Get Map Instance
const MapInitializer = ({ setMapInstance }) => {
  const map = useMap();
  
  useEffect(() => {
    console.log("✅ Map Loaded Successfully:", map);
    setMapInstance(map);
  }, [map, setMapInstance]);

  return null;
};

const MapComponent = ({ setMapInstance }) => {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapInitializer setMapInstance={setMapInstance} />
    </MapContainer>
  );
};

export default MapComponent;

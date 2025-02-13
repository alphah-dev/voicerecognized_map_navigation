import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;

const App = () => {
  const [mapInstance, setMapInstance] = useState(null);

 
  useEffect(() => {
    console.log("🔥 Map Instance Updated:", mapInstance);
  }, [mapInstance]);

  const startVoiceCommand = () => {
    if (!mapInstance) {
      alert("⏳ Please wait, the map is still loading...");
      return;
    }
    recognition.start();
  };

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Recognized Command:", command);
    executeCommand(command);
  };

  const executeCommand = (command) => {
    console.log("Recognized Command:", command);
    console.log("Current Map Instance:", mapInstance);

    if (!mapInstance) {
      console.log("❌ Map is not initialized yet!");
      return;
    }
    if (command.includes("zoom in")) {
      console.log("✅ Zooming in...");
      mapInstance.setZoom(mapInstance.getZoom() + 1);
    } else if (command.includes("zoom out")) {
      console.log("✅ Zooming out...");
      mapInstance.setZoom(mapInstance.getZoom() - 1);
    } else if (command.includes("move to delhi")) {
      console.log("✅ Moving to Delhi...");
      mapInstance.setView([28.6139, 77.2090], 10);
    } else if (command.includes("move to mumbai")) {
      console.log("✅ Moving to Mumbai...");
      mapInstance.setView([19.0760, 72.8777], 10);
    } else if (command.includes("move to ahmedabad")) {
      console.log("✅ Moving to Ahmedabad...");
      mapInstance.setView([23.0225, 72.5714], 10);
    } else if (command.includes("move to vit-ap")) {
      console.log("✅ Moving to VIT-AP...");
      mapInstance.setView([16.5062, 80.6480], 10);
    } else if (command.includes("move to iit bombay")) {
      console.log("✅ Moving to IIT Bombay...");
      mapInstance.setView([19.1334, 72.9133], 12);
    } else if (command.includes("move to iit delhi")) {
      console.log("✅ Moving to IIT Delhi...");
      mapInstance.setView([28.5450, 77.1926], 12);
    } else if (command.includes("move to supreme court")) {
      console.log("✅ Moving to Supreme Court...");
      mapInstance.setView([28.6256, 77.2103], 12);
    } else if (command.includes("move to gb road")) {
      console.log("✅ Moving to GB Road...");
      mapInstance.setView([28.6411, 77.2227], 14);
    } else {
      console.log("❌ Command not recognized:", command);
      alert("Command not recognized. Try 'Zoom in', 'Move to Delhi', etc.");
    }
  };

  return (
    <div>
      <button onClick={startVoiceCommand}>🎤 Start Voice Command</button>
      <MapComponent setMapInstance={setMapInstance} />
    </div>
  );
};

export default App;

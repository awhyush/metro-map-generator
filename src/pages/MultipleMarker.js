// MultipleMarkersMapPage.js
import React, { useEffect, useRef } from "react";
import Map from "../components/Map";
import L from "leaflet";
const MultipleMarkersMapPage = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([0, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      locations.forEach((location, index) => {
        L.marker([location.lat, location.lon])
          .addTo(map)
          .bindPopup(`Marker ${index + 1}`);
      });
    }
  }, [locations]);

  return <div style={{ height: "100vh" }} ref={mapRef}></div>;
};

export default MultipleMarkersMapPage;

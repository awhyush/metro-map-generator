import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import the marker icon and its shadow from the leaflet package
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const Map = ({ lat, lng, locations, paths }) => {
  useEffect(() => {
    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define the custom marker icon
    const customIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    locations.forEach((location) => {
      L.marker([location.lat, location.lon], { icon: customIcon })
        .addTo(map)
        .bindPopup(location.name)
        .openPopup();
    });

    const colors = [
      "blue",
      "red",
      "green",
      "purple",
      "orange",
      "yellow",
      "cyan",
      "magenta",
      "lime",
      "pink",
    ];

    paths.forEach((path, index) => {
      const latlngs = path.map(([lat, lon]) => [lat, lon]);
      const color = colors[index % colors.length];
      L.polyline(latlngs, { color }).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [lat, lng, locations, paths]);

  return <div id="map" style={{ height: "100%" }} />;
};

export default Map;

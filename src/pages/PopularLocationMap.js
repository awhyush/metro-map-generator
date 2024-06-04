import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const popularLocations = [
  [23.2577724, 77.3959808],
  [23.2640858, 77.4084167],
];
const PopularLocationsMap = ({ popularLocations }) => {
  if (!popularLocations) {
    return <div>Loading...</div>; // Add loading state or handle the case when popularLocations is undefined
  }

  return (
    <MapContainer center={[0, 0]} zoom={13} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {popularLocations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lon]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default PopularLocationsMap;

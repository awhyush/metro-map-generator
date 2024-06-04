// CityRoutes.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Map from "../components/Map.js";
import fetchCityCoordinates from "../components/cityService.js";

const CityRoutes = () => {
  const [cityName, setCityName] = useState("");
  const [routes, setRoutes] = useState([]);
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmittedCity(cityName);
      // Fetch data for the busiest routes in the city
      const response = await fetch(
        `https://api.example.com/routes?city=${cityName}`
      );
      const data = await response.json();
      setRoutes(data.routes);
    } catch (error) {
      console.error("Error fetching routes:", error);
    }
  };

  return (
    <div>
      <h1>Enter a city's name to see its busiest routes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submittedCity && <p>Showing routes for: {submittedCity}</p>}
      <div style={{ height: "400px", width: "100%" }}>
        <Map />
      </div>
    </div>
  );
};

export default CityRoutes;

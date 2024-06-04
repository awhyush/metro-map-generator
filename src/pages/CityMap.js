import React, { useState } from "react";
import fetchCityCoordinates from "../components/cityService";
import axios from "axios";
import Map from "../components/Map";
import { getShortestPath } from "../components/shortestPath";
import "./CityMap.css"; // Import the CSS file for styles

const CityMap = () => {
  const [cityName, setCityName] = useState("Bhopal");
  const [locations, setLocations] = useState([]);
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [paths, setPaths] = useState([]);
  const [radius, setRadius] = useState("5");
  const [limit, setLimit] = useState("20");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { lat, lon } = await fetchCityCoordinates(cityName);
      if (lat && lon) {
        setMapCenter([lat, lon]);
        const response = await axios.get(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}000&lon=${lon}&lat=${lat}&kinds=tourist_facilities&limit=${limit}&apikey=5ae2e3f221c38a28845f05b6faec35aab09d9b556934b15e57770233`
        );

        const popularLocations = response.data.features.map((location) => ({
          lat: location.geometry.coordinates[1],
          lon: location.geometry.coordinates[0],
          name: location.properties.name,
        }));

        setLocations(popularLocations);

        console.log(popularLocations);
        const mainPath = getShortestPath([lat, lon], [...popularLocations]);
        const alternativePaths = getAlternativePaths(
          [lat, lon],
          popularLocations
        );

        setPaths([mainPath, ...alternativePaths]);
      } else {
        console.error("Error fetching city coordinates");
      }
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
    }
  };

  const getAlternativePaths = (start, locations) => {
    // Implement logic to generate alternative paths
    // This is a placeholder function; you should replace it with your own logic
    const altPaths = [];
    for (let i = 1; i < locations.length; i++) {
      const altLocations = [...locations];
      const altStart = altLocations.splice(i, 1)[0];
      const altPath = getShortestPath(
        [altStart.lat, altStart.lon],
        altLocations
      );
      altPaths.push(altPath);
    }
    return altPaths;
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ flex: "0 0 30%", padding: "20px", backgroundColor: "#E5E5E5" }}
      >
        <h2>Enter City Name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter city name"
            required
            style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
          />
          <input
            type="text"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            placeholder="Enter Radius Limit"
          />
          <input
            type="text"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            placeholder="Enter Station Limit"
          />
          <button type="submit" style={{ width: "100%", padding: "5px" }}>
            Submit
          </button>
        </form>
        <h3>Popular Locations</h3>
        <ul className="location-list">
          {locations
            .filter((location) => location.name) // Filter out empty names before rendering
            .map((location, index) => (
              <li key={index} className="location-item">
                {location.name}
              </li>
            ))}
        </ul>
      </div>
      <div style={{ flex: "1", position: "relative" }}>
        <Map
          lat={mapCenter[0]}
          lng={mapCenter[1]}
          locations={locations}
          paths={paths}
        />
      </div>
    </div>
  );
};

export default CityMap;

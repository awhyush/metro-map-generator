// cityService.js
import axios from "axios";

const fetchCityCoordinates = async (cityName) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`
    );
    if (response.data && response.data.length > 0) {
      const { lat, lon } = response.data[0];
      // console.log(lat, lon);
      return { lat: parseFloat(lat), lon: parseFloat(lon) };
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    console.error("Error fetching city coordinates:", error);
    return null;
  }
};

export default fetchCityCoordinates;

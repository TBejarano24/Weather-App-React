import { useEffect, useState } from "react";
import axios from "axios";

export default function useWeather(lat, lon, units) {
  const [foreCastData, setForeCastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${
            lat ? lat : 0
          }&lon=${lon ? lon : 0}&appid=${apiKey}&units=${units}`
        );
        setForeCastData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lat, lon, units, apiKey]);

  return { foreCastData, loading, error };
}

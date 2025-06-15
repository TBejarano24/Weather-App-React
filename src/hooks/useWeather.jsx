import { useEffect, useState } from "react";
import axios from "axios";

export default function useWeather(city, country_code, units) {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&appid=${apiKey}&units=${units}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, country_code, units, apiKey]);

  const currentDate = new Date(
    weatherData?.dt * 1000 + weatherData?.timezone * 1000
  );
  const arrayDate = currentDate.toString().split(" ");
  const formattedDate = `${arrayDate[0]}, ${arrayDate[2]} ${arrayDate[1]}`;

  return { weatherData, loading, error, formattedDate };
}

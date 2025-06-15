import { useEffect, useState } from "react";
import axios from "axios";

export default function useCities(input) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `${import.meta.env.BASE_URL}static_Json/cities.json`
        );
        setCities(
          response.data.filter((city) => {
            return city.name.toLowerCase().includes(input.toLowerCase());
          })
        );
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, [input]);

  console.log(cities, input);

  return { cities, loading, error };
}

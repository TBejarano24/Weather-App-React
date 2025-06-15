import { useState } from "react";
import Degrees from "./components/Degrees";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import MainWeather from "./components/MainWeather";

export default function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState([]);
  const [units, setUnits] = useState("metric");

  console.log(currentWeatherData);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
        <MainWeather
          setCurrentWeatherData={setCurrentWeatherData}
          units={units}
        />
        <div className="bg-[#100e1d] grid grid-cols-1 justify-items-center xl:grid-rows-[60px_200px_1fr]">
          <Degrees setUnits={setUnits} />
          <Forecast coordinates={currentWeatherData?.coord} units={units} />

          <Highlights currentWeatherData={currentWeatherData} units={units} />
        </div>
      </div>
    </>
  );
}

/* api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} */

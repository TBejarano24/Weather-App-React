import { useState } from "react";
import useWeather from "../hooks/useWeather";
import FilterModal from "./FilterModal";

export default function MainWeather({ setCurrentWeatherData, units }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("tokyo");
  const [countryCode, setCountryCode] = useState("JP");
  const { weatherData, loading, error, formattedDate } = useWeather(
    location,
    countryCode,
    units
  );

  const handleClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  if (loading) {
    return (
      <div className="bg-[#1e213a] grid grid-cols-1 place-items-center h-[547px] md:h-[696px]">
        <p className="text-[#e7e7e7] text-[30px] font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#1e213a] grid grid-cols-1 place-items-center h-[547px] md:h-[696px]">
        <p className="text-[#e7e7e7] text-[30px] font-bold">
          Something went wrong...
        </p>
      </div>
    );
  }

  setCurrentWeatherData(weatherData);
  console.log(location);

  return (
    <div className="bg-[#1e213a] grid grid-cols-1 justify-items-center md:grid-rows-[50px_200px_0.3fr_70px_0.1fr_200px] relative">
      <div className="flex justify-around items-end h-[50px] w-full">
        <button
          onClick={handleClick}
          className="bg-[#6e707a] px-4 py-1 text-[#e7e7e7] hover:cursor-pointer hover:scale-110"
        >
          Search for Places
        </button>
        <button className="bg-[#6e707a] rounded-full p-2 hover:cursor-pointer hover:bg-[#47484e]">
          <img
            className="w-[20px] h-[20px]"
            src="/location.svg"
            alt="geolocation icon"
          />
        </button>
      </div>
      <div className="bg-[url(/others/Cloud-background.png)] w-full h-[200px] bg-center bg-cover flex justify-center items-center opacity-30"></div>
      <img
        className="w-[100px] h-[100px] absolute top-[90px] mx-auto inset-0"
        src={`/weather/${weatherData?.weather?.[0].icon}.png`}
        alt="current_weather_icon"
      />
      <div className="flex items-center">
        <span className="text-[90px] text-[#e7e7e7] font-semibold">
          {Math.round(weatherData?.main?.temp)}
        </span>
        <span className="text-[60px] text-[#bebebead]">
          {units === "metric" ? "°C" : "°F"}
        </span>
      </div>
      <span className="text-[40px] text-[#bebebead] font-semibold">
        {weatherData?.weather?.[0].main}
      </span>
      <span className="text-[14px] text-[#bebebead] mt-[20px]">
        {`Today . ${formattedDate}`}
      </span>
      <div className="flex justify-center items-center gap-2 my-[20px] self-start">
        <img className="w-[20px]" src="/location_on.svg" alt="location icon" />
        <span className="text-[14px] text-[#bebebead]">
          {weatherData?.name}
        </span>
      </div>
      <FilterModal
        state={isOpen}
        closeModal={handleClick}
        setLocation={setLocation}
        location={location}
        setCountryCode={setCountryCode}
      />
    </div>
  );
}

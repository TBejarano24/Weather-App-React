import { WindDirection } from "../helpers/WindDirection";

export default function Highlights({ currentWeatherData, units }) {
  let visibilityKm = currentWeatherData?.visibility / 1000;

  return (
    <div className="grid grid-cols-1 w-full max-w-[256px] md:max-w-[460px]">
      <h2 className="text-[25px] text-[#e7e7eb] font-semibold place-self-start">
        Today's Highlights
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-y-5 mt-2 mb-5 md:grid-cols-2 md:gap-x-5">
        <div className="w-full h-[192px] bg-[#1e213a] grid grid-rows-[1fr_2fr_1.5fr] justify-items-center">
          <span className="text-[#e7e7eb] place-self-center text-[17px]">
            Wind status
          </span>
          <div className="place-self-center">
            <span className="text-[#e7e7eb] text-[50px] font-bold">
              {currentWeatherData?.wind?.speed}
            </span>
            <span className="text-[#e7e7eb] text-[35px]">
              {units === "metric" ? "ms" : "mph"}
            </span>
          </div>
          <div className="flex justify-center gap-5 items-center w-full">
            <img
              style={{ rotate: `${currentWeatherData?.wind?.deg}deg` }}
              className="w-[40px] bg-[#626475] rounded-full p-2"
              src="/navigation.svg"
              alt="compass icon"
            />
            <span className="text-[#e7e7eb]">
              {WindDirection(currentWeatherData)}
            </span>
          </div>
        </div>
        <div className="w-full h-[192px] bg-[#1e213a] grid grid-rows-[1fr_2fr_1.5fr] justify-items-center">
          <span className="text-[#e7e7eb] place-self-center text-[17px]">
            Humidity
          </span>
          <div className="place-self-center">
            <span className="text-[#e7e7eb] text-[50px] font-bold">
              {currentWeatherData?.main?.humidity}
            </span>
            <span className="text-[#e7e7eb] text-[35px]">%</span>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-[70%] grid grid-cols-1 grid-rows-[1fr_auto_auto]">
              <div className="flex justify-between text-[12px] text-[#a09fb1] font-bold">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="h-[8px] w-full bg-[#e7e7eb] rounded-xl">
                <div
                  style={{ width: `${currentWeatherData?.main?.humidity}%` }}
                  className={`h-[8px] bg-[#ffec65] rounded-xl`}
                ></div>
              </div>
              <div className="justify-self-end text-[#a09fb1] font-bold">%</div>
            </div>
          </div>
        </div>
        <div className="w-full h-[152px] bg-[#1e213a] grid grid-rows-[1fr_2fr] justify-items-center">
          <span className="text-[#e7e7eb] place-self-center text-[17px]">
            Visibility
          </span>
          <div className="place-self-center">
            <span className="text-[#e7e7eb] text-[50px] font-bold">
              {units === "metric"
                ? visibilityKm
                : Math.round(visibilityKm * 0.621371)}
            </span>
            <span className="text-[#e7e7eb] text-[35px]">
              {units === "metric" ? "km" : "mi"}
            </span>
          </div>
        </div>
        <div className="w-full h-[152px] bg-[#1e213a] grid grid-rows-[1fr_2fr] justify-items-center">
          <span className="text-[#e7e7eb] place-self-center text-[17px]">
            Air Pressure
          </span>
          <div className="place-self-center">
            <span className="text-[#e7e7eb] text-[50px] font-bold">
              {currentWeatherData?.main?.pressure}
            </span>
            <span className="text-[#e7e7eb] text-[35px]">mb</span>
          </div>
        </div>
      </div>
    </div>
  );
}

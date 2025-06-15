import ForecastCard from "./ForecastCard";
import useForecast from "../hooks/useForecast";

export default function Forecast({ coordinates, units }) {
  const { foreCastData, loading, error } = useForecast(
    coordinates?.lat,
    coordinates?.lon,
    units
  );

  let dayId = 0;

  const fiveDayForecast = foreCastData?.list?.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 w-[256px] justify-items-center mt-[20px] mb-[60px] md:w-[460px] xl:w-[800px] text-[24px] text-[#e7e7e7] font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="grid grid-cols-2 w-[256px] gap-x-4 gap-y-4 justify-items-center mt-[20px] mb-[60px] md:grid-cols-3 md:w-[460px] md:gap-x-1 xl:w-[800px] xl:grid-cols-5">
      {fiveDayForecast?.map((day) => {
        dayId++;
        return (
          <ForecastCard info={day} key={dayId} order={dayId} units={units} />
        );
      })}
    </div>
  );
}

export default function ForecastCard({ info, order, units }) {
  // console.log(info);

  const currentDate = new Date(info?.dt * 1000);
  const arrayDate = currentDate.toString().split(" ");
  const formattedDate = `${arrayDate[0]}, ${arrayDate[2]} ${arrayDate[1]}`;

  return (
    <div className="w-[120px] h-[160px] bg-[#1e213a] grid grid-rows-[1fr_1fr_1fr] justify-items-center">
      <span className="text-center self-center text-[17px] text-[#e7e7eb] font-semibold">
        {order === 1 ? "Tomorrow" : formattedDate}
      </span>
      <img
        className="w-[50px]"
        src={`${import.meta.env.BASE_URL}/weather/${
          info?.weather?.[0]?.icon
        }.png`}
        alt="weather-forecast-icon"
      />
      <div className="flex gap-2 items-center">
        <span className="text-[#e7e7eb] text-[17px] font-semibold">
          {Math.round(info?.main?.temp_max)}
          {units === "metric" ? "°C" : "°F"}
        </span>
        <span className="text-[#bebebead] text-[17px] font-semibold">
          {Math.round(info?.main?.temp_min)}
          {units === "metric" ? "°C" : "°F"}
        </span>
      </div>
    </div>
  );
}

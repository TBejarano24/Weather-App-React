export default function Degrees({ setUnits }) {
  const handleCelsius = () => {
    setUnits("metric");
  };

  const handleFarenheit = () => {
    setUnits("imperial");
  };

  return (
    <div className="flex justify-end items-end gap-3 w-[256px] h-[80px] md:w-[435px] xl:w-[760px] xl:h-auto">
      <button
        onClick={handleCelsius}
        className="bg-[#e7e7eb] px-[12px] py-[8px] rounded-full font-bold hover:cursor-pointer"
      >
        °C
      </button>
      <button
        onClick={handleFarenheit}
        className="bg-[#585676] px-[13px] py-[8px] rounded-full font-bold text-[#e7e7e7] hover:cursor-pointer"
      >
        °F
      </button>
    </div>
  );
}

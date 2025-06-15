import { useState } from "react";
import useCities from "../hooks/useCities";
import CitySuggestion from "./CitySuggestion";

export default function FilterModal({
  state,
  closeModal,
  setLocation,
  location,
  setCountryCode,
}) {
  const [input, setInput] = useState("");
  const { cities } = useCities(input);

  const handleClose = () => {
    closeModal();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setLocation(input);
    closeModal();
  };

  return (
    <div
      className={`bg-[#1e213a] w-full h-[547px] ${
        state ? "fixed" : "hidden"
      } md:w-[33%] md:h-full grid grid-rows-[60px_80px_1fr] top-0 left-0`}
    >
      <button
        onClick={handleClose}
        className="w-[90%] flex justify-end items-end hover:cursor-pointer"
      >
        <img className="w-[30px]" src="/close.svg" alt="close icon" />
      </button>
      <nav className="flex justify-around items-center">
        <div className="border-4 border-[#6e707a] flex w-[55%]">
          <img className="w-[30px] mx-1" src="/search.svg" alt="search icon" />
          <input
            onChange={handleInput}
            className="w-full h-[40px] text-[#e7e7e7] placeholder:text-[#6e707a] text-[20px] outline-none"
            placeholder="search location"
            type="text"
            defaultValue={location}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 font-semibold text-[20px] bg-[#3c47e9] text-[#e7e7e7] hover:scale-110 hover:cursor-pointer"
        >
          Search
        </button>
      </nav>
      <div>
        <ol className="ml-[35px]">
          {cities?.slice(0, 10).map((city) => {
            return (
              <CitySuggestion
                info={city}
                key={city?.id}
                setLocation={setLocation}
                setCountryCode={setCountryCode}
                closeModal={closeModal}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

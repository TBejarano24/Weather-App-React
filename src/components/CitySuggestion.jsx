export default function CitySuggestion({
  info,
  setLocation,
  closeModal,
  setCountryCode,
}) {
  const handleClick = () => {
    setLocation(info?.name);
    setCountryCode(info?.country_code);
    closeModal();
  };

  return (
    <li
      onClick={handleClick}
      className="flex items-center text-[#e7e7e7] text-[21px] font-semibold border-b border-b-[#69696979] hover:cursor-pointer hover:bg-[#161322] hover:ease-in-out hover:duration-200 px-2 py-1"
    >{`${info?.name}, ${info?.country_code}`}</li>
  );
}

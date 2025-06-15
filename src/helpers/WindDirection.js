export function WindDirection(currentWeatherData) {
  let windDirection = "";

  if (currentWeatherData?.wind?.deg >= 337.5) {
    windDirection = "NNW";
  } else if (currentWeatherData?.wind?.deg >= 315) {
    windDirection = "NW";
  } else if (currentWeatherData?.wind?.deg >= 292.5) {
    windDirection = "WNW";
  } else if (currentWeatherData?.wind?.deg >= 270) {
    windDirection = "W";
  } else if (currentWeatherData?.wind?.deg >= 247.5) {
    windDirection = "WSW";
  } else if (currentWeatherData?.wind?.deg >= 225) {
    windDirection = "SW";
  } else if (currentWeatherData?.wind?.deg >= 202.5) {
    windDirection = "SSW";
  } else if (currentWeatherData?.wind?.deg >= 180) {
    windDirection = "S";
  } else if (currentWeatherData?.wind?.deg >= 157.5) {
    windDirection = "SSE";
  } else if (currentWeatherData?.wind?.deg >= 135) {
    windDirection = "SE";
  } else if (currentWeatherData?.wind?.deg >= 112.5) {
    windDirection = "ESE";
  } else if (currentWeatherData?.wind?.deg >= 90) {
    windDirection = "E";
  } else if (currentWeatherData?.wind?.deg >= 67.5) {
    windDirection = "ENE";
  } else if (currentWeatherData?.wind?.deg >= 45) {
    windDirection = "NE";
  } else if (currentWeatherData?.wind?.deg >= 22.5) {
    windDirection = "NNE";
  } else if (currentWeatherData?.wind?.deg >= 0) {
    windDirection = "N";
  }

  return windDirection;
}

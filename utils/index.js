export const utils = {
  convertKtoC(deg) {
    return Math.floor(deg - 273.15);
  },
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  getDay(day) {
    switch (day) {
      case 0:
        return `Sunday`;
        break;
      case 1:
        return `Monday`;
        break;
      case 2:
        return `Tuesday`;
        break;
      case 3:
        return `Wednesday`;
        break;
      case 4:
        return `Thursday`;
        break;
      case 5:
        return `Friday`;
        break;
      case 6:
        return `Saturday`;
        break;
      default:
        return ``;
        break;
    }
  },
  getMonth(month) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[month];
  }
};

export const weatherImages = {
  // clear sky
  "01d": require("./../assets/icons/weather/clear-day.png"),
  "01n": require("./../assets/icons/weather/clear-night.png"),
  // few clouds
  "02d": require("./../assets/icons/weather/partly-cloudy.png"),
  "02n": require("./../assets/icons/weather/partly-cloudy-night.png"),
  // scattered clouds
  "03d": require("./../assets/icons/weather/mostly-cloudy.png"),
  "03n": require("./../assets/icons/weather/mostly-cloudy-night.png"),
  // broken clouds
  "04d": require("./../assets/icons/weather/cloudy-weather.png"),
  "04n": require("./../assets/icons/weather/cloudy-weather.png"),
  // shower rain
  "09d": require("./../assets/icons/weather/rainy-weather.png"),
  "09n": require("./../assets/icons/weather/rainy-weather.png"),
  // rain
  "10d": require("./../assets/icons/weather/rainy-day.png"),
  "10n": require("./../assets/icons/weather/rainy-night.png"),
  // thunderstorm
  "11d": require("./../assets/icons/weather/thunder-day.png"),
  "11n": require("./../assets/icons/weather/thunder-night.png"),
  // snow
  "13d": require("./../assets/icons/weather/snow-day.png"),
  "13n": require("./../assets/icons/weather/snow-night.png"),
  // mist
  "50d": require("./../assets/icons/weather/haze-day.png"),
  "50n": require("./../assets/icons/weather/haze-night.png"),
};

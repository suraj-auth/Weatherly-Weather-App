import {
  MapPin,
  UserContext,
  Wind,
  clouds,
  humidity,
  pressure,
  rain,
  useContext,
  visibility,
  weather,
  wind,
} from "../../constant/Helper.jsx";
const Hero1 = () => {
  // Data stores the actual value from the API
  const { data } = useContext(UserContext);

  // data.city.name = city name;
  // data.city.country = country name;
  // data.list[0].dt_txt = time and date of weather;
  // data.list[0].main.temp = main temperature at a given time;
  // data.list[0].weather[0].description = description of current weather;
  // data.list[0].main.feels_like = gives the feesl like temperature;
  // data.list[0].main.temp_max = gives the maximum temperature;
  // data.list[0].main.temp_min = gives the minimum temperature;
  // data.list[0].main.humidity = gives humidity;
  // data.list[0].wind.speed = gives wind speed;
  // data.list[0].clouds.all = gives clouds percentage;
  // data.list[0].pop = gives raining probablity;
  // data.list[0].visibility = gives visibility;
  // data.list[0].main.pressure = gives pressure;

  return (
    <div className="flex py-5 sm:flex-row flex-col items-center justify-center gap-5">
      {/* Hero Section 1 Left Part */}
      <div className="min-w-9/12 sm:min-w-5/12 md:min-w-2/6">
        {/* Left Part - 1 */}
        <div className="flex sm:gap-2 flex-col">
          <div className="flex gap-2 items-center text-md sm:text-xl font-semibold">
            <MapPin />
            <h2>
              {" "}
              {data.city.name}, {data.city.country}
            </h2>
          </div>
          <p className="text-sm mt-2 text-mist-300">
            {data.list[0].dt_txt.slice(0, 10)}
          </p>
        </div>
        {/* Left Part - 2 */}
        <div className="py-2 sm:py-5 gap-7 flex items-center">
          <div className="text-6xl sm:text-7xl font-medium">
            {Math.round(data.list[0].main.temp - 273.15)}
            <sup>°</sup>
            <sub>c</sub>
          </div>
          <div>
            <img className="h-16 sm:h-20" src={weather} alt="" />
          </div>
        </div>
        {/* Left Part - 3 */}
        <div>
          <h2 className="text-md sm:text-lg text-white font-medium">
            {data.list[0].weather[0].description}
          </h2>
          <p className="text-xs sm:text-sm text-mist-300">
            Feels like {Math.round(data.list[0].main.feels_like - 273.15)}
            <sup>°</sup> | H: {Math.round(data.list[0].main.temp_max - 273.15)}
            <sup>°</sup> L: {Math.round(data.list[0].main.temp_min - 273.15)}
            <sup>°</sup>
          </p>
        </div>
      </div>
      {/* Hero Section 1 Right Part */}
      <div className="py-6 flex rounded-3xl items-center justify-around md:min-w-2/6 sm:min-w-5/12 min-w-10/12 bg-linear-to-r from-blue-400 to-blue-900">
        {/* Right Part - 1 */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-4">
            <div>
              <img className="h-8" src={humidity} alt="" />
            </div>
            <div>
              <p>{Math.round(data.list[0].main.humidity)} %</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>
              <img className="h-8" src={wind} alt="" />
            </div>
            <div>
              <p>{Math.round(data.list[0].wind.speed * 3.6)} km/h</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>
              <img className="h-8" src={clouds} alt="" />
            </div>
            <div>
              <p>{Math.round(data.list[0].clouds.all)} %</p>
            </div>
          </div>
        </div>
        {/* Right Part - 2 */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-4">
            <div>
              <img className="h-8" src={rain} alt="" />
            </div>
            <div>
              <p>{Math.round(data.list[0].pop * 100)} %</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>
              <img className="h-8" src={visibility} alt="" />
            </div>
            <div>
              <p>{Math.round(data.list[0].visibility / 1000)} km</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>
              <img className="h-8" src={pressure} alt="" />
            </div>
            <div>
              <p>{Math.round(data.list[0].main.pressure)} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;

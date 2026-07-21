import {
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
  Level6,
  useContext,
  UserContext,
  weatherImages,
  Error,
  Loader,
} from "../../constant/Helper.jsx";
const Forecast = () => {
  // Context From UserContext
  // havedata - tells whether API has data or not
  // data - stores the data from the API
  // loaddata - used to show user loader screen until data fetches
  const { havedata, data, loaddata } = useContext(UserContext);
  return (
    <>
      {/* Only Page will shown when we have data */}
      {data && (
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="bg-sky-800 py-10 backdrop-blur-md rounded-3xl p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">
                5-Day Forecast
              </h2>
            </div>
            {/* Forecast Cards */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Day 1 Forecast */}
              <div className="bg-white/10 hover:bg-sky-600 rounded-2xl p-4 flex md:flex-col items-center justify-between md:justify-center flex-1 gap-4">
                <h3 className="text-white text-center font-semibold">
                  {data.list[3].dt_txt.slice(0, 10)}
                </h3>

                <img
                  src={weatherImages[data.list[3].weather[0].icon]}
                  alt=""
                  className="w-14 h-14 object-contain my-3"
                />

                <p className="text-2xl text-center font-bold text-white">
                  {Math.round(data.list[3].main.temp - 273.15)}°
                </p>
              </div>
              {/* Day 2 Forecast */}
              <div className="bg-white/10 hover:bg-sky-600 rounded-2xl p-4 flex md:flex-col items-center justify-between md:justify-center flex-1 gap-4">
                <h3 className="text-white text-center font-semibold">
                  {data.list[11].dt_txt.slice(0, 10)}
                </h3>
                <img
                  src={weatherImages[data.list[11].weather[0].icon]}
                  alt=""
                  className="w-14 h-14 object-contain my-3"
                />
                <p className="text-2xl font-bold text-center text-white">
                  {Math.round(data.list[11].main.temp - 273.15)}°
                </p>
              </div>
              {/* Day 3 Forecast */}
              <div className="bg-white/10 hover:bg-sky-600 rounded-2xl p-4 flex md:flex-col items-center justify-between md:justify-center flex-1 gap-4">
                <h3 className="text-white text-center font-semibold">
                  {data.list[19].dt_txt.slice(0, 10)}
                </h3>
                <img
                  src={weatherImages[data.list[19].weather[0].icon]}
                  alt=""
                  className="w-14 h-14 object-contain my-3"
                />
                <p className="text-2xl text-center font-bold text-white">
                  {Math.round(data.list[19].main.temp - 273.15)}°
                </p>
              </div>
              {/* Day 4 Forecast */}
              <div className="bg-white/10 hover:bg-sky-600 rounded-2xl p-4 flex md:flex-col items-center justify-between md:justify-center flex-1 gap-4">
                <h3 className="text-white text-center font-semibold">
                  {data.list[27].dt_txt.slice(0, 10)}
                </h3>
                <img
                  src={weatherImages[data.list[27].weather[0].icon]}
                  alt=""
                  className="w-14 h-14 object-contain my-3"
                />
                <p className="text-2xl text-center font-bold text-white">
                  {Math.round(data.list[27].main.temp - 273.15)}°
                </p>
              </div>
              {/* Day 5 Forecast */}
              <div className="bg-white/10 hover:bg-sky-600 rounded-2xl p-4 flex md:flex-col items-center justify-between md:justify-center flex-1 gap-4">
                <h3 className="text-white text-center font-semibold">
                  {data.list[35].dt_txt.slice(0, 10)}
                </h3>
                <img
                  src={weatherImages[data.list[35].weather[0].icon]}
                  alt=""
                  className="w-14 h-14 object-contain my-3"
                />
                <p className="text-2xl text-center font-bold text-white">
                  {Math.round(data.list[35].main.temp - 273.15)}°
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* show loader until data fetches */}
      {loaddata && <Loader />}
      {/* show error code in case API does not give data */}
      {havedata && <Error />}
    </>
  );
};

export default Forecast;

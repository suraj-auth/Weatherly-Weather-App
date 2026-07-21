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
} from "../../constant/Helper.jsx";
const Hero2 = () => {
  // Data stores the actual value from the API
  const { data } = useContext(UserContext);

  // data.list[0].weather[0].icon = gives the weather icon
  // weatherImages object return the mapped images according to weather icon code

  return (
    <div className="w-fit border mx-auto flex items-center justify-center gap-1 lg:gap-10 rounded-2xl px-3 sm:px-14 py-3 bg-sky-800">
      {/* 3 AM Temperature */}
      <div className="px-2 sm:px-3 py-2 rounded-2xl w-fit flex flex-col items-center justify-center bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">03 : AM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[0].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[0].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
      {/* 6 AM Temperature */}
      <div className="px-3 py-2 rounded-2xl w-fit hidden md:flex flex-col items-center justify-center hover:bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">06 : AM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[1].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[1].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
      {/* 9 AM Temperature */}
      <div className="px-3 py-2 rounded-2xl w-fit flex flex-col items-center justify-center hover:bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">09 : AM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[2].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[2].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
      {/* 12 PM Temperature */}
      <div className="px-3 py-2 rounded-2xl w-fit hidden md:flex flex-col items-center justify-center hover:bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">12 : PM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[3].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[3].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
      {/* 3 PM Temperature */}
      <div className="px-3 py-2 rounded-2xl w-fit flex flex-col items-center justify-center hover:bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">03 : PM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[4].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[4].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
      {/* 6 PM Temperature */}
      <div className="px-3 hidden py-2 rounded-2xl w-fit md:flex flex-col items-center justify-center hover:bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">06 : PM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[5].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[5].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
      {/* 9 PM Temperature */}
      <div className="px-3 py-2 rounded-2xl w-fit flex flex-col items-center justify-center hover:bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">09 : PM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[6].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[6].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
      {/* 11 PM Temperature */}
      <div className="px-3 py-2 rounded-2xl w-fit flex flex-col items-center justify-center hover:bg-sky-600 gap-3">
        <p className="sm:text-lg text-sm">11 : PM</p>
        <img
          className="h-10"
          src={weatherImages[data.list[7].weather[0].icon]}
          alt=""
        />
        <h3>
          {Math.round(data.list[7].main.temp - 273.15)}
          <sup>°</sup>
        </h3>
      </div>
    </div>
  );
};

export default Hero2;

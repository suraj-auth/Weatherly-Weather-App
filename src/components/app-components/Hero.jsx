import {
  SearchBar,
  Hero1,
  Hero2,
  useState,
  geoOption,
  weatherOption,
  useContext,
  UserContext,
  useEffect,
  Loader,
  Error,
} from "../../constant/Helper.jsx";
const Hero = () => {
  // Context from User Context
  const {
    tempval,
    setData,
    data,
    havedata,
    setHavedata,
    loaddata,
    setLoaddata,
  } = useContext(UserContext);

  // this function is used to get the latitude and longitude of the desired city.
  // in geoUrl the tempval stores the city whose latitude and longitude we have to find.
  async function getGeo() {
    const geoUrl = `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${tempval}`;
    // TRY BLOCK -->
    // 1. here we use fetch to call the api with geoUrl and geoOption, and this data is stored in the response variable.
    // 2. this response is in text format, so we convert it into json format.
    // 3. then we get the latitude using - result[0].latitude & longitude using - result[0].longitude.
    // 4. then we call the getWeather function with these latitude and longitude.
    try {
      const response = await fetch(geoUrl, geoOption);
      const result = await response.json();
      let a = result[0].latitude;
      let b = result[0].longitude;
      getWeather(a, b);
      console.log("geo adress fetched successfully");
    } catch (error) {
      // CATCH BLOCK -->
      // 1. in case of api error first we set our loaddata variable as false, so the loader will disappear.
      // 2. after disabling loader, we set the havedata as true. so we can show the error that api is not responding.
      setLoaddata(false);
      setHavedata(true);
      console.log("Unable to Fetch City Geo Location");
    }
  }

  // this function is used to get the weather of the desired city.
  // in weatherUrl the {a} stores the city latitude & {b} stores the city longitude.
  async function getWeather(a, b) {
    const weatherUrl = `https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=${a}&longitude=${b}&lang=IN`;
    // TRY BLOCK -->
    // 1. here we use fetch to call the api with weatherUrl and weatherOption, and this data is stored in the response variable.
    // 2. this response is in text format, so we convert it into json format.
    // 3. then we store the entire result object into our data variable, using setData().
    // 4. then we set the loaddata as false, to stop the loader.
    try {
      const response = await fetch(weatherUrl, weatherOption);
      const result = await response.json();
      setData(result);
      setLoaddata(false);
      console.log("weather data fetched successfully");
    } catch (error) {
      // CATCH BLOCK -->
      // 1. in case of api error first we set our loaddata variable as false, so the loader will disappear.
      // 2. after disabling loader, we set the havedata as true. so we can show the error that api is not responding.
      setLoaddata(false);
      setHavedata(true);
      console.log("Unable to Fetch City Geo Location");
    }
  }

  // First - Whenever the value of tempval changes this useEffect Automatically calls the getGeo() function.
  // Second - Even if tempval changes first we check whether we have data or not, so we can stop unnecessary Re-renders.
  // if we have data then we dont call getGeo(), otherwise we call it.
  useEffect(() => {
    if (!data) {
      getGeo();
    }
  }, [tempval]);

  return (
    <div className="sm:pb-0 pb-10">
      <SearchBar />
      {/* Shows Hero1 & Hero2 only when we have values in our data object */}
      {data && (
        <>
          <Hero1 />
          <Hero2 />
        </>
      )}
      {/* Show Loader Until Data Fetches */}
      {loaddata && <Loader />}
      {/* Show Error Code in Case API Does Not Response */}
      {havedata && <Error />}
    </div>
  );
};

export default Hero;

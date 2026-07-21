import {
  Search,
  cityobj,
  useState,
  useContext,
  UserContext,
} from "../../constant/Helper.jsx";

const SearchBar = () => {
  // Used to Show Text in Case Input Value is Empty
  const [isempty, setIsempty] = useState(false);

  // Used to Store the Value of Input Tag
  const [inval, setInval] = useState("");

  // Used to Store the Array of Related Cities
  const [item, setItem] = useState([]);

  // Context From Layout
  const { tempval, setTempval, setData, setLoaddata, setHavedata } =
    useContext(UserContext);

  // First - after clicking findcity function first we set our item array as empty using setItem, so the suggestion drawer disappear.
  // Second - if the inval value is empty, then we mark the isempty as true - to show the empty value error line.
  // Third - then we set our data as null, so the previous data will disappear.
  // Fourth - then we put our input tag value in tempval using setTempval.
  // Fifth - then we set our loaddata as true, so it can show loader until new data is fetched.
  // Sixth - then we set our havedata as false using setHavedata, so it will not show the API error.
  // Seventh - then we assign inval as empty using setInval, to clear the input tag for new text.
  function findCity() {
    setItem([]);
    if (inval.trim() === "") setIsempty(true);
    else {
      console.log(inval);
      setData(null);
      setTempval(inval);
      setLoaddata(true);
      setHavedata(false);
      setInval("");
    }
  }

  // This Function Works When User Click on a City Suggestion. And Then The Suggested City Value is Putted into the (inval) using setInval.
  // Then item array is assigned as empty using setItem so, Suggestion Box Will Disappear.
  function assignCity(elem) {
    setInval(elem);
    setItem([]);
  }

  // First - the isempty value is setted as false. so the empty value box disappear.
  // Second - the new value from the input tag is placed in (inval) using setInval.
  // Third - if the value of inval after trimming is empty, then we just return.
  // Fourth - if the value of inval after trimming is not empty, then we filter our cityobj to show related cities. then we use slice to show at max only five city suggestion at a time.
  // Fifth - the filtered cityobj value is then stored in our item array using setItem.
  function changeInval(e) {
    setIsempty(false);
    const value = e.target.value;
    setInval(value);
    if (value.trim() === "") {
      setItem([]);
      return;
    }
    const matchedcities = cityobj
      .filter((city) => city.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
    setItem(matchedcities);
  }

  return (
    <div className="flex relative sm:flex-row flex-col-reverse w-full px-5 sm:px-20 items-center mt-2 sm:mt-6 justify-center py-2 gap-3 sm:gap-10">
      {/* Input bar */}
      <div className="flex items-center justify-center min-w-full sm:min-w-3/6">
        {/* Input Tag */}
        <input
          className="h-12 sm:h-14 w-5/6 pl-5 text-white outline-none  bg-sky-700 rounded-l-full"
          type="text"
          value={inval}
          onClick={() => setIsempty(false)}
          onChange={(e) => {
            changeInval(e);
          }}
          placeholder="Search for city..."
        />
        {/* Search Icon */}
        <div
          onClick={findCity}
          className="text-white flex items-center justify-center bg-sky-700 h-12 sm:h-14 rounded-r-full px-5 hover:bg-sky-500 cursor-pointer"
        >
          <Search />
        </div>
      </div>
      {/* App title */}
      <h2 className="bg-linear-to-r from-white to-sky-500 text-transparent bg-clip-text text-xl sm:text-4xl font-bold">
        Discover The Weather In Your City
      </h2>
      {/* City Suggestion Drawer */}
      {item.length > 0 && (
        <div className="absolute top-28 lg:top-24 z-40 text-xl bg-sky-800 font-semibold w-5/6 sm:w-2/6 border left-10 sm:left-30">
          {item.map((elem, index) => (
            <h3
              key={index}
              onClick={() => assignCity(elem)}
              className="border px-4 py-2 w-full"
            >
              {elem}
            </h3>
          ))}
        </div>
      )}
      {/* Tells User that Input Value Is Empty */}
      {isempty && (
        <div className="absolute top-28 lg:top-24 z-40 text-xl bg-sky-800 font-semibold border p-3 left-10 sm:left-30">
          <h2>Please Enter a Valid City</h2>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

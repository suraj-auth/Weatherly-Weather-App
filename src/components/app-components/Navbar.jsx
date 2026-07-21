import {
  X,
  Menu,
  useState,
  weather,
  House,
  Sun,
  MapPin,
  Link,
} from "../../constant/Helper.jsx";

const Navbar = () => {
  // Used to Hold the toggle value for the Navbar Drawer
  const [togglebar, setTogglebar] = useState(false);

  // Function to toggle the value - togglebar
  function drawnavbar() {
    setTogglebar(!togglebar);
  }

  return (
    <nav className="sticky top-0 z-50 flex px-6 md:px-2 h-20 items-center justify-between max-w-7xl mx-auto backdrop-blur-md">
      {/* menu bar logo */}
      <Link to="/" className="flex items-center justify-center gap-5">
        <img className="h-16" src={weather} alt="" />
        <h2 className="text-2xl font-medium sm:font-bold">Weatherly</h2>
      </Link>
      {/* all tabs in menu bar */}
      <div className="hidden md:flex items-center justify-center gap-5">
        <Link
          to="/dashboard"
          className="flex items-center justify-center gap-2 cursor-pointer text-neutral-100 hover:text-white hover:bg-sky-300 rounded-md px-2 py-2"
        >
          <House />
          <div>Dashboard</div>
        </Link>
        <Link
          to="/forecast"
          className="flex items-center justify-center gap-2 cursor-pointer text-neutral-100 hover:text-white hover:bg-sky-300 rounded-md px-2 py-2"
        >
          <Sun />
          <div>Forecast</div>
        </Link>
        <Link
          to="/map"
          className="flex items-center justify-center gap-2 cursor-pointer text-neutral-100 hover:text-white hover:bg-sky-300 rounded-md px-2 py-2"
        >
          <MapPin />
          <div>Map</div>
        </Link>
      </div>
      {/* menu button for menu bar */}
      <div className="md:hidden" onClick={drawnavbar}>
        {togglebar && <X color="#272525" />}
        {!togglebar && <Menu />}
      </div>
      {/* Menu bar for mobile screen */}
      {togglebar && (
        <div className="fixed flex flex-col items-center justify-center gap-5 w-full top-20 left-0 py-10 bg-linear-to-r from-white to-blue-700">
          <Link
            to="/dashboard"
            onClick={drawnavbar}
            className="flex w-3/6 pl-6 sm:pl-14 items-center justify-start gap-2 cursor-pointer text-neutral-800 rounded-md px-2 py-2"
          >
            <House />
            <div>Dashboard</div>
          </Link>
          <Link
            to="/forecast"
            onClick={drawnavbar}
            className="flex w-3/6 pl-6 sm:pl-14 items-center justify-start gap-2 cursor-pointer text-neutral-800 rounded-md px-2 py-2"
          >
            <Sun />
            <div>Forecast</div>
          </Link>
          <Link
            to="/map"
            onClick={drawnavbar}
            className="flex w-3/6 pl-6 sm:pl-14 items-center justify-start gap-2 cursor-pointer text-neutral-800 rounded-md px-2 py-2"
          >
            <MapPin />
            <div>Map</div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

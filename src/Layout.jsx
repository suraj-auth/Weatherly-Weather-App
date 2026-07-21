import { Navbar, Outlet, UserContext, useState } from "./constant/Helper.jsx";

const Layout = () => {
  // Holds the Temporary Value for Startup Interface
  const [tempval, setTempval] = useState("Fatehabad");

  // Holds the Actual Data from the API
  const [data, setData] = useState(null);

  // Used for Checking Whether API Has Data or Not (used to show error in API)
  const [havedata, setHavedata] = useState(false);

  // Used to show the Loader until the Data Fetch
  const [loaddata, setLoaddata] = useState(true);

  return (
    <UserContext.Provider
      value={{
        tempval,
        setTempval,
        data,
        setData,
        havedata,
        setHavedata,
        loaddata,
        setLoaddata,
      }}
    >
      <div className="min-h-screen bg-cover bg-center bg-[url(./assets/bgImage.png)]">
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default Layout;

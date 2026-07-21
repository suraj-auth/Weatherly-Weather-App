import { IndiaPC, IndiaMB } from "../../constant/Helper.jsx";
const Map = () => {
  return (
    <div>
      {/* Shows the Image for Laptop Screen */}
      <img className="w-full hidden sm:flex" src={IndiaPC} alt="" />
      {/* Shows the Image for Mobile Screen */}
      <img className="w-full sm:hidden" src={IndiaMB} alt="" />
    </div>
  );
};

export default Map;

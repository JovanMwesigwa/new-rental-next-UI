import { MdHomeWork } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { BsCalendarDate, BsChatLeftDots, BsBell } from "react-icons/bs";

interface Props {
  active: string;
  activatePage: (name: string) => void;
}

const LeftSideBar: React.FC<Props> = ({ active, activatePage }) => {
  return (
    <div className="w-20 h-screen overflow-auto bg-white flex flex-col items-center justify-around top-0 left-0 z-20 fixed">
      <div
        onClick={() => activatePage("home")}
        className="h-10 w-10 bg-gray-400 rounded-full cursor-pointer"
      >
        {/* <MdHomeWork size={23} /> */}
      </div>

      <div
        onClick={() => activatePage("home")}
        className={`p-3 cursor-pointer hover:text-red-600 ${
          active === "home" && "border-l-4 border-red-600 text-red-600"
        }`}
      >
        <MdHomeWork size={23} />
      </div>
      <div
        onClick={() => activatePage("units")}
        className={`p-3 cursor-pointer hover:text-red-600 ${
          active === "units" && "border-l-4 border-red-600 text-red-600"
        }`}
      >
        <MdOutlineBedroomParent size={23} />
      </div>
      <div
        onClick={() => activatePage("star")}
        className={`p-3 cursor-pointer hover:text-red-600 ${
          active === "star" && "border-l-4 border-red-600 text-red-600"
        }`}
      >
        <BsBell size={23} />
      </div>
      <div
        onClick={() => activatePage("calender")}
        className={`p-3 cursor-pointer hover:text-red-600 ${
          active === "calender" && "border-l-4 border-red-600 text-red-600"
        }`}
      >
        <BsCalendarDate size={23} />
      </div>

      <div
        onClick={() => activatePage("help")}
        className={`p-3 cursor-pointer hover:text-red-600 ${
          active === "help" && "border-l-4 border-red-600 text-red-600"
        }`}
      >
        <FiHelpCircle size={23} />
      </div>
      <div
        onClick={() => activatePage("settings")}
        className={`p-3 cursor-pointer hover:text-red-600 ${
          active === "settings" && "border-l-4 border-red-600 text-red-600"
        }`}
      >
        <FiSettings size={23} />
      </div>
    </div>
  );
};

export default LeftSideBar;

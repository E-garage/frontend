import { Link } from "react-router-dom";
import { IoSettingsSharp, IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = () => (
  <div className="bg-indigo-800 h-72 rounded-xl text-white px-4 py-2">
    <div className="flex justify-between">
      <h2 className="text-xl">Dashboard</h2>
      <div className="lg:flex justify-between items-center lg:w-450">
        <div className="bg-white rounded-xl p-2">
          <FiSearch className="inline text-black text-lg" />
          <input
            type="text"
            placeholder="type..."
            className="ml-2 w-40 outline-none text-black"
          />
        </div>
        <div className="flex justify-between items-center lg:w-1/2 mt-2 lg:mt-0">
          <Link to="/account" className="flex items-center cursor-pointer">
            <FaUserAlt className="mr-2" />
            Account
          </Link>
          <IoSettingsSharp className="ml-8 cursor-pointer float-right" />
          <IoNotifications className="cursor-pointer float-right" />
        </div>
      </div>
    </div>
  </div>
);

export default Header;

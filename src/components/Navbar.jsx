import { useState } from "react";
import NavItems from "../components/NavItems";
import { Link } from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";
import { GoThreeBars } from "react-icons/go";
import MediaQuery from "react-responsive";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);
  return (
    <div>
      <MediaQuery maxWidth={1024}>
        <div className="relative">
          <GoThreeBars
            className="text-4xl text-indigo-800 mt-2 ml-2 cursor-pointer"
            onClick={() => setIsNav(true)}
          />
          <button
            className={`w-screen h-screen top-0 fixed bg-black bg-opacity-50 z-40 ${
              isNav ? "block" : "hidden"
            }`}
            onClick={() => setIsNav(false)}
          ></button>
          <nav
            className={`w-64 pl-2 fixed top-0 bg-gray-100 h-full transition duration-500 ease-in-out transform z-50 ${
              isNav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Link to="/" className="my-5 flex items-end cursor-pointer">
              <span className="text-5xl text-indigo-800">
                <GiHomeGarage />
              </span>
              <h1 className="text-3xl ml-5">E-garage</h1>
            </Link>
            <div className="w-3/4 h-px mx-auto bg-gray-300 my-10 rounded-full" />
            <NavItems />
          </nav>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <nav className="w-64 pl-2">
          <Link to="/" className="my-5 flex items-end cursor-pointer">
            <span className="text-5xl text-indigo-800">
              <GiHomeGarage />
            </span>
            <h1 className="text-3xl ml-5">E-garage</h1>
          </Link>
          <div className="w-3/4 h-px mx-auto bg-gray-300 my-10 rounded-full" />
          <NavItems />
        </nav>
      </MediaQuery>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import NavItem from "../components/NavItem";
import { NavLink } from "react-router-dom";
import {
  IoHome,
  IoCarSportSharp,
  IoStatsChart,
  IoSettingsSharp,
  IoNotifications,
} from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import MediaQuery from "react-responsive";

const Layout = ({ children }) => {
  const [isNav, setIsNav] = useState(false);
  return (
    <div className="bg-gray-100 text-black h-full flex">
      <MediaQuery maxWidth={1024}>
        <div className="relative">
          <GoThreeBars
            className="text-4xl text-indigo-800 mt-2 ml-2 cursor-pointer"
            onClick={() => setIsNav(true)}
          />

          <div
            className={`w-screen h-screen top-0 fixed bg-black bg-opacity-50 ${
              isNav ? "block" : "hidden"
            }`}
            onClick={() => setIsNav(false)}
          ></div>
          <nav
            className={`w-64 pl-2 fixed top-0 bg-gray-100 h-full transition duration-500 ease-in-out transform ${
              isNav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <NavLink to="/" className="my-5 flex items-end cursor-pointer">
              <span className="text-5xl text-indigo-800">
                <GiHomeGarage />
              </span>
              <h1 className="text-3xl ml-5">E-garage</h1>
            </NavLink>
            <div className="w-3/4 h-px mx-auto bg-gray-300 my-10 rounded-full" />
            <ul className="list-none">
              <NavItem icon={<IoHome />} name="Dashboard" exact to="/" />
              <NavItem icon={<IoCarSportSharp />} name="Cars" to="/cars" />
              <NavItem
                icon={<MdFamilyRestroom />}
                name="Family sharing"
                to="/family-sharing"
              />
              <NavItem
                icon={<BsCreditCardFill />}
                name="Financies"
                to="/financies"
              />
              <NavItem icon={<IoStatsChart />} name="Raports" to="/raports" />
            </ul>
          </nav>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <nav className="w-64 pl-2">
          <NavLink to="/" className="my-5 flex items-end cursor-pointer">
            <span className="text-5xl text-indigo-800">
              <GiHomeGarage />
            </span>
            <h1 className="text-3xl ml-5">E-garage</h1>
          </NavLink>
          <div className="w-3/4 h-px mx-auto bg-gray-300 my-10 rounded-full" />
          <ul className="list-none">
            <NavItem icon={<IoHome />} name="Dashboard" exact to="/" />
            <NavItem icon={<IoCarSportSharp />} name="Cars" to="/cars" />
            <NavItem
              icon={<MdFamilyRestroom />}
              name="Family sharing"
              to="/family-sharing"
            />
            <NavItem
              icon={<BsCreditCardFill />}
              name="Financies"
              to="/financies"
            />
            <NavItem icon={<IoStatsChart />} name="Raports" to="/raports" />
          </ul>
        </nav>
      </MediaQuery>
      <div className="w-full py-2 px-2 lg:px-10 flex flex-col justify-between min-h-screen">
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
                <span className="flex items-center cursor-pointer">
                  <FaUserAlt className="mr-2" />
                  Account
                </span>
                <IoSettingsSharp className="ml-8 cursor-pointer float-right" />
                <IoNotifications className="cursor-pointer float-right" />
              </div>
            </div>
          </div>
        </div>
        {children}
        <footer className="bg-indigo-800 rounded-xl text-white px-4 pt-2 mt-20 lg:mt-60">
          <div className="lg:w-1/2 mx-auto text-center mt-5">
            <h1 className="text-5xl font-light">Do you need help?</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis in
              quam eget quam ultricies id. Viverra tincidunt nulla egestas
              bibendum. Risus vitae vitae a nibh lacus elit. Dictum aliquam
              volutpat amet pulvinar fermentum eget.
            </p>
            <div className="w-80 flex justify-between mx-auto mt-5">
              <button className="bg-white rounded-xl text-black py-1 px-3">
                <span className="mr-2">👀</span>Insights
              </button>
              <button className="bg-white rounded-xl text-black py-1 px-3">
                <span className="mr-2">👋</span>Contact
              </button>
            </div>
          </div>
          <div className="w-4/5 h-px bg-gray-600 mt-5 mx-auto"></div>
          <p className="text-center mt-10 font-light">
            © 2021 E-garage company
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

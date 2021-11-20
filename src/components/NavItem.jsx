import { NavLink } from "react-router-dom";

const NavItem = ({ icon, name, ...props }) => (
  <li>
    <NavLink
      {...props}
      className="flex items-center cursor-pointer p-4 mt-2"
      activeClassName="bg-white shadow-navItem rounded-3xl"
    >
      <span className="bg-indigo-800 text-white text-xl p-2 rounded-xl">
        {icon}
      </span>
      <p className="ml-2">{name}</p>
    </NavLink>
  </li>
);

export default NavItem;

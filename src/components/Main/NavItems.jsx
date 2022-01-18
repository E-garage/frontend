import NavItem from "./NavItem";
import { IoHome, IoCarSportSharp, IoStatsChart } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";

const NavItems = () => (
  <ul className="list-none">
    <NavItem icon={<IoHome />} name="Dashboard" exact to="/" />
    <NavItem icon={<IoCarSportSharp />} name="Cars" to="/cars" />
    <NavItem
      icon={<MdFamilyRestroom />}
      name="Families"
      to="/families"
    />
    <NavItem icon={<BsCreditCardFill />} name="Financies" to="/financies" />
    <NavItem icon={<IoStatsChart />} name="Raports" to="/raports" />
  </ul>
);

export default NavItems;

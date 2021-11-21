import RaportCard from "../components/RaportCard";
import { IoIosExpand } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import Revenues from "../images/revenues.png";
import RevenueCircle from "../images/revenue_circle.png";

const Raports = () => (
  <div className="mt-10 flex justify-between flex-wrap">
    <div className="w-700 bg-white rounded-lg shadow-raportCard mb-10">
      <div className="flex justify-between items-start p-5 border-b border-1">
        <div className="flex items-start">
          <span className="bg-gray-200 p-2 rounded-full cursor-pointer">
            <IoIosExpand className="text-xl" />
          </span>
          <div className="ml-5">
            <h3 className="font-semibold">Revenue</h3>
            <h4 className="text-gray-400 -mt-1">Raport Center</h4>
          </div>
        </div>
        <BsThreeDotsVertical className="text-2xl cursor-pointer" />
      </div>
      <div className="lg:flex justify-between items-center lg:h-360 p-5 border-b border-1">
        <div className="w-1/2">
          <img src={Revenues} alt="revenues" />
        </div>
        <div>
          <div className="bg-blue-500 text-white flex items-center py-5 px-10 rounded-xl">
            <img src={RevenueCircle} alt="revenue_circle" />
            <div className="ml-8">
              <h5 className="text-s">Net Income</h5>
              <p className="text-lg font-bold">$ 23.100,00</p>
            </div>
          </div>
          <div className="flex items-center py-5 px-10 rounded-xl mt-5 border-2">
            <img src={RevenueCircle} alt="revenue_circle" />
            <div className="ml-8">
              <h5 className="text-gray-400">Net Income</h5>
              <p className="text-lg font-bold">$ 3.070,00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 overflow-hidden">
        <div className="flex items-center float-right cursor-pointer">
          <p className="uppercase font-semibold">see details</p>
          <BiChevronRight className="text-2xl" />
        </div>
      </div>
    </div>
    <RaportCard />
    <RaportCard />
    <div className="w-full flex justify-between flex-wrap -mb-20">
      <RaportCard />
      <RaportCard />
      <RaportCard />
      <RaportCard />
    </div>
  </div>
);

export default Raports;

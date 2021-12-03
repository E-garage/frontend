import { IoIosExpand } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

const RaportCard = ({ children }) => (
  <div className="w-340 bg-white rounded-lg shadow-raportCard mb-10">
    <div className="flex justify-between items-start p-5 border-b border-1">
      <div className="flex items-start">
        <span className="bg-gray-200 p-2 rounded-full cursor-pointer">
          <IoIosExpand className="text-xl" />
        </span>
        <div className="ml-5">
          <h3 className="font-semibold">Revenue</h3>
          <h4 className="text-gray-400 -mt-1">Report Center</h4>
        </div>
      </div>
      <BsThreeDotsVertical className="text-2xl cursor-pointer" />
    </div>
    <div className="p-5 border-b border-1 h-360">
      {children}
    </div>
    <div className="p-3 overflow-hidden">
      <div className="flex items-center float-right cursor-pointer">
        <p className="uppercase font-semibold">see details</p>
        <BiChevronRight className="text-2xl" />
      </div>
    </div>
  </div>
);

export default RaportCard;

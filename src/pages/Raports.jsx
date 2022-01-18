import RaportCard from "../components/RaportCard";
import { IoIosExpand } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  { name: "Server", value: 25 },
  { name: "Services", value: 45 },
  { name: "Hosting", value: 15 },
  { name: "Others", value: 15 },
];
const COLORS = ["#0088FE", "#FB902A", "#50CA64", "#EEE"];

const data2 = [
  {
    name: "Dec 19",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Dec 25",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const Raports = () => (
  <div className="mt-10 flex justify-between flex-wrap">
    <div className="w-517 lg:w-700 bg-white rounded-lg shadow-raportCard mb-10">
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
      <div className="lg:flex justify-between items-center lg:h-360 py-5 pr-5 border-b border-1">
        <div className="lg:w-7/12 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis axisLine={false} tickCount={3} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <div className="bg-blue-500 text-white flex items-center py-3 rounded-xl w-96 lg:w-72 ml-10 lg:ml-0">
            <CircularProgressbar
              value={75}
              maxValue={100}
              text={`${75}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                trailColor: "rgba(255, 255, 255, 0.4)",
                textSize: "28px",
              })}
              className="w-20 h-20"
            />
            <div className="ml-5 w-full">
              <h5 className="">Net Income</h5>
              <p className="text-lg font-bold">$ 9,000,00</p>
            </div>
          </div>
          <div className="flex items-center py-3 rounded-xl mt-5 border-2 w-96 lg:w-72 ml-10 lg:ml-0">
            <CircularProgressbar
              value={24}
              maxValue={100}
              text={`${24}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#FF6B6B",
                trailColor: "#F3F3F4",
                textSize: "28px",
              })}
              className="w-20 h-20"
            />
            <div className="ml-5 w-full">
              <h5 className="text-gray-400">Average spend</h5>
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
    <RaportCard>
      <PieChart width={260} height={210}>
        <Pie
          data={data}
          cx={150}
          cy={100}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex justify-between mt-7">
        <div>
          <div className="flex items-center">
            <FaDotCircle className="text-blue-400" />
            <p className="ml-2 uppercase text-gray-400 text-sm font-medium">
              server (25%)
            </p>
          </div>
          <div className="flex items-center mt-5">
            <FaDotCircle className="text-yellow-500" />
            <p className="ml-2 uppercase text-gray-400 text-sm font-medium">
              services (45%)
            </p>
          </div>
        </div>
        <div className="align-right">
          <div className="flex items-center">
            <FaDotCircle className="text-green-500" />
            <p className="ml-2 uppercase text-gray-400 text-sm font-medium">
              hosting (15%)
            </p>
          </div>
          <div className="flex items-center mt-5">
            <FaDotCircle className="text-gray-200" />
            <p className="ml-2 uppercase text-gray-400 text-sm font-medium">
              others (15%)
            </p>
          </div>
        </div>
      </div>
    </RaportCard>
    <RaportCard />
    <RaportCard />
    <RaportCard />
    <RaportCard />
  </div>
);

export default Raports;

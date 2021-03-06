import React from "react";
import Income from "../images/income.svg";
import Expenditure from "../images/expenditure.svg";
import { BsDropletHalf } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { MdLocalCarWash } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import Refueling from '../components/Refueling/Refueling'

const Financies = () => (
  <div className="text-gray-800">
    <div className="2xl:flex justify-between items-start mt-10">
      <div>
        <div className="card flex-row justify-between items-center sm:w-585 bg-white p-7 shadow-balance z-10">
          <div className="flex">
            <span className="bg-green-100 p-4 rounded-lg">
              <img src={Income} alt="income" />
            </span>
            <div className="flex flex-col justify-between ml-5">
              <h3>Net income</h3>
              <p className="text-gray-400">$6.650</p>
            </div>
          </div>
          <div className="flex w-60">
            <span className="bg-red-100 p-4 rounded-lg">
              <img src={Expenditure} alt="expenditure" />
            </span>
            <div className="flex flex-col justify-between ml-5">
              <h3>Expenditure</h3>
              <p className="text-gray-400">$6.650</p>
            </div>
          </div>
        </div>
        <div className="card flex-between flex-row items-center justify-between bg-white shadow-balance sm:w-585 mt-10 px-12 py-8">
          <div className="flex flex-col justify-between h-24">
            <h3 className="text-lg font-semibold text-gray-600">
              Monthy spending limit
            </h3>
            <p className="text-gray-400">Spend: $3.050 / $5.000</p>
          </div>
          <CircularProgressbar
            value={50}
            maxValue={100}
            strokeWidth={20}
            styles={buildStyles({
              textColor: "white",
              pathColor: "#F9D46C",
              trailColor: "#F3F3F3",
              textSize: "20px",
            })}
            className="w-40 h-40 -mr-28"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-10 2xl:mt-0">Expenses</h3>
        <div className="flex justify-around md:justify-between flex-wrap md:w-585 mt-5">
          <div className="card bg-white shadow-expenseCard px-5 py-2 w-40">
            <p className="text-2xl">$550</p>
            <p className="text-sm">12/20/20</p>
            <BsDropletHalf className="mt-10 text-blue-500 text-3xl" />
            <p className="text-lg font-semibold">Fuel</p>
          </div>
          <div className="card bg-white shadow-expenseCard px-5 py-2 w-40">
            <p className="text-2xl">$550</p>
            <p className="text-sm">12/20/20</p>
            <FiTruck className="mt-10 text-yellow-500 text-3xl" />
            <p className="text-lg font-semibold">Mechanic</p>
          </div>
          <div className="card bg-white shadow-expenseCard px-5 py-2 w-40 mt-10 md:mt-0">
            <p className="text-2xl">$550</p>
            <p className="text-sm">12/20/20</p>
            <MdLocalCarWash className="mt-10 text-green-500 text-3xl" />
            <p className="text-lg font-semibold">Car Wash</p>
          </div>
        </div>
        <div className="flex justify-between items-start mt-20">
          <span className="bg-yellow-200 p-2 rounded">
            <BsDropletHalf className="text-yellow-500 text-3xl" />
          </span>
          <div className="w-2/3 md:w-4/5">
            <ProgressBar
              completed={52}
              height={12}
              isLabelVisible={false}
              bgColor="#F59E0B"
              animateOnRender
              className="mt-1"
            />
            <p className="text-gray-500 mt-1">Fuel</p>
          </div>
          <p className="text-gray-500 text-2xl">52%</p>
        </div>
        <div className="flex justify-between items-start mt-5">
          <span className="bg-green-200 p-2 rounded">
            <FiTruck className="text-green-500 text-3xl" />
          </span>
          <div className="w-2/3 md:w-4/5">
            <ProgressBar
              completed={21}
              height={12}
              isLabelVisible={false}
              bgColor="#10B981"
              animateOnRender
              className="mt-1"
            />
            <p className="text-gray-500 mt-1">Mechanic</p>
          </div>
          <p className="text-gray-500 text-2xl">21%</p>
        </div>
        <div className="flex justify-between items-start mt-5">
          <span className="bg-blue-200 p-2 rounded">
            <MdLocalCarWash className="text-blue-500 text-3xl" />
          </span>
          <div className="w-2/3 md:w-4/5">
            <ProgressBar
              completed={74}
              height={12}
              isLabelVisible={false}
              bgColor="#3B82F6"
              animateOnRender
              className="mt-1"
            />
            <p className="text-gray-500 mt-1">Car wash</p>
          </div>
          <p className="text-gray-500 text-2xl">74%</p>
        </div>
      </div>
    </div>
    <Refueling />
  </div>
);

export default Financies;

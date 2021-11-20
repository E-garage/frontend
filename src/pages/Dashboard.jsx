import DashboardCard from "../components/DashboardCard";
import DashboardAction from "../components/DashboardAction";
import CarItem from "../components/CarItem";
import { AiOutlinePlus } from "react-icons/ai";
import Chart from "../images/chart.png";
import Map from "../images/map.png";

const Dashboard = () => (
  <>
    <div className="flex justify-center 3xl:justify-between flex-wrap">
      <DashboardCard name="Recent Expenses">
        <img src={Chart} alt="chart" width="400" />
      </DashboardCard>
      <DashboardCard name="Last Parking Space">
        <img src={Map} alt="map" className="mx-auto mt-3" />
      </DashboardCard>
      <DashboardCard name="Last Actions">
        <DashboardAction name="Last Login" date="07.11.2021" />
        <DashboardAction name="Last Login" date="07.11.2021" />
        <DashboardAction name="Last Login" date="07.11.2021" />
        <DashboardAction name="Last Login" date="07.11.2021" />
      </DashboardCard>
    </div>
    <div className="mt-5 p-5 bg-white rounded-lg shadow-card">
      <h3 className="text-2xl">Garage</h3>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-4 gap-y-10 mt-10">
        <CarItem />
        <CarItem />
        <CarItem />
        <div className="flex flex-col justify-center items-center border border-black h-96 rounded-2xl cursor-pointer">
          <AiOutlinePlus className="text-3xl" />
          <p>Add a new car</p>
        </div>
      </div>
    </div>
  </>
);

export default Dashboard;

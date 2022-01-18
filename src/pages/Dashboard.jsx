import DashboardCard from "../components/Dashboard/DashboardCard";
import DashboardAction from "../components/Dashboard/DashboardAction";
import CarItems from "../components/Car/CarItems"
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
    <CarItems />
  </>
);

export default Dashboard;

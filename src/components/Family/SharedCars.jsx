import Car from "../../images/dashboard_car.png";
import AddSharedCar from "./AddSharedCar";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

const SharedCars = ({ sharedCars }) => {
  const renderCars = () => {
    if (!sharedCars) {
      return (
        <div className="absolute left-1/2">
          <Loader type="TailSpin" color="#3730A3" height={100} width={100} />
        </div>
      );
    }

    return sharedCars.map(car => (
      <div key={car.id} className="px-3">
        <img src={Car} alt="car" className="rounded-2xl" />
        <h4 className="mt-5 font-bold text-xl">{car.brand}</h4>
        <p className="mt-2 pr-3 h-20 w-96 xl:w-auto text-gray-500 break-words overflow-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-full">
          {car.description}
        </p>
      </div>
    ));
  };

  return (
    <div
      className={`mt-5 p-5 bg-white rounded-lg shadow-card ${
        !sharedCars && "h-72"
      }`}
    >
      <h3 className="text-2xl">Shared Cars</h3>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-4 gap-y-10 mt-10 overflow-auto">
        {renderCars()}
        {sharedCars && <AddSharedCar />}
      </div>
    </div>
  );
};

export default connect(null)(SharedCars);

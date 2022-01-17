import { useEffect } from "react";
import Car from "../../images/dashboard_car.png";
import AddCar from "./AddCar";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import api from "../../api/carsAPI";
import { connect } from 'react-redux'
import { setCars } from '../../actions/carActions'

const CarItems = ({ cars, setCars }) => {

  const getAllCars = async () => {
    try {
      await api.getAllCars().then(response => setCars(response.data));
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    // getAllCars();
    setCars([ { id: "1", brand: "BMW T4", description: "sdlfkjdsfldddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" } ])
  }, []);

  const renderCars = () => {
    if (!cars) {
      return (
        <div className="absolute left-1/2">
          <Loader type="TailSpin" color="#3730A3" height={100} width={100} />
        </div>
      );
    }

    return cars.map(car => (
      <div key={car.id} className="px-3">
        <img src={Car} alt="car" className="rounded-2xl" />
        <h4 className="mt-5 font-bold text-xl">{car.brand}</h4>
        <p className="mt-2 pr-3 h-20 w-96 xl:w-auto text-gray-500 break-words overflow-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-full">
          {car.description}
        </p>
        <Link
          to={`cars/${car.id}`}
          className="border border-green-500 text-lg py-2 rounded-2xl block w-28 text-center"
        >
          View
        </Link>
      </div>
    ));
  };

  return (
    <div className={`mt-5 p-5 bg-white rounded-lg shadow-card ${!cars && "h-72"}`}>
      <h3 className="text-2xl">Garage</h3>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-4 gap-y-10 mt-10">
        {renderCars()}
        {cars && <AddCar />}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cars: state.carReducer.cars }
}

export default connect(mapStateToProps, { setCars })(CarItems);
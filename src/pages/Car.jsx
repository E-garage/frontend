import { useEffect } from "react";
import CarImage from "../images/dashboard_car.png";
import { connect } from "react-redux";
import { setCar } from "../actions/carActions";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import api from "../api/carsAPI";
import EditCar from "../components/Car/EditCar";
import EditCarSpecs from "../components/Car/EditCarSpecs";
import CarInspection from "../components/Car/CarInspection"
import Refueling from "../components/Refueling/Refueling"


const Car = ({ car, setCar }) => {
  const { id } = useParams();

  const getCar = async () => {
    await api.getOneCar(id).then(res => setCar(res.data));
  };

  const deleteCar = async () => {
    console.log("car deleted", id);
  };

  useEffect(() => {
    // getCar();
    setCar({
      brand: "BMW T4",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    });
  }, []);

  if (!car)
    return (
      <div className="mx-auto mt-20">
        <Loader type="TailSpin" color="#3730A3" height={100} width={100} />
      </div>
    );

  const table = {
    col1: {
      rows: [
        { key: "Engine capacity:", value: "2.01" },
        { key: "Horse power:", value: "200hp" },
        { key: "Sits:", value: "5" },
        { key: "Doors:", value: "5" },
        { key: "Color:", value: "Silver" },
      ],
    },
    col2: {
      rows: [
        { key: "Drivetrain:", value: "FWD" },
        { key: "Body:", value: "SUV" },
        { key: "Fuel type:", value: "Petrol" },
        { key: "Mileage:", value: "150000km" },
      ],
    },
  };

  return (
    <div>
      <div className="3xl:flex justify-center mt-20 px-5 bg-white rounded-xl py-20 w-full xl:w-3/4 mx-auto">
        <img
          src={CarImage}
          className="mr-20 rounded-lg h-72 shadow-car"
          alt="car"
        />
        <div className="w-96 relative mt-5 3xl:mt-0">
          <div className="relative">
            <h3 className="font-bold text-2xl">{car.brand}</h3>
            <div className="h-1 w-16 bg-indigo-600 rounded-full"></div>
          </div>
          <p className="mt-5 h-40 overflow-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-full">
            {car.description}
          </p>
          <EditCar car={car} />
          <button
            onClick={deleteCar}
            className="mt-7 w-48 bg-red-600 text-white p-4 rounded-lg absolute 3xl:bottom-0 -right-5"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-7 mt-10 w-full xl:w-3/4 mx-auto">
        <h3 className="font-bold text-center text-2xl mb-10 border-b pb-7">
          Specifications
        </h3>
        <div className="flex justify-around">
          <table key="1">
            <tbody>
              {table.col1.rows.map(row => (
                <tr key="1" className="p-5">
                  <td className="font-bold w-40 text-lg">{row.key}</td>
                  <td className="w-40 text-center">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table key="1">
            <tbody className="relative">
              {table.col2.rows.map(row => (
                <tr key="1" className="p-5">
                  <td className="font-bold p-6 borde w-40 text-lg">
                    {row.key}
                  </td>
                  <td className="borde w-40 text-center">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-center mt-5">
          <EditCarSpecs />
        </div>
      </div>
      <Refueling />
      <CarInspection />
    </div>
  );
};

const mapStateToProps = state => {
  return { car: state.carReducer.car };
};

export default connect(mapStateToProps, { setCar })(Car);

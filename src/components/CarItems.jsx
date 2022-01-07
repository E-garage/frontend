import CarItem from "./CarItem";
import { AiOutlinePlus } from "react-icons/ai";

const CarItems = () => (
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
);

export default CarItems;

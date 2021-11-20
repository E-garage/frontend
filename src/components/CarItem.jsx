import Car from "../images/dashboard_car.png";
import { Link } from "react-router-dom";

const CarItem = () => (
  <div>
    <img src={Car} alt="car" className="rounded-2xl" />
    <h4 className="mt-10 font-bold text-xl">BMW 13</h4>
    <textarea
      cols="35"
      rows="2"
      placeholder="Describe car"
      className="mt-5 resize-none outline-none"
    ></textarea>
    <Link
      to="/"
      className="border border-green-500 text-lg py-2 rounded-2xl block w-28 text-center"
    >
      View
    </Link>
  </div>
);

export default CarItem;

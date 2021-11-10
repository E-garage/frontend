import Car from "../images/dashboard_car.png";

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

    <div className="flex justify-between mt-5">
      <button className="border border-green-500 text-lg py-2 px-12 rounded-2xl block">
        View
      </button>
    </div>
  </div>
);

export default CarItem;

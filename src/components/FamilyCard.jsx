import FamilyIcon from "../images/family_icon.svg";

const FamilyCard = () => (
  <div className="w-368 bg-white p-5 relative rounded-xl">
    <img src={FamilyIcon} alt="family_icon" className="border border-1 p-1" />
    <h3 className="font-semibold text-lg mt-5">Family number 1</h3>
    <p className="text-gray-500 border-b border-b-1 mt-3 pb-3">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore.
    </p>
    <div className="float-right mt-3">
      <button className="border border-1 py-1 px-5 rounded text-gray-400 mr-5">
        disable
      </button>
      <button className="border border-1 py-1 px-6 rounded text-red-500">
        delete
      </button>
    </div>
    <div className="badge badge-primary bg-blue-100 border-none text-blue-500 absolute top-5 right-5 px-5">
      Active
    </div>
  </div>
);

export default FamilyCard;

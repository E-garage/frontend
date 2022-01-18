import { useEffect } from "react";
import FamilyIcon from "../images/family_icon.svg";
import AddFamilyCard from "../components/Family/AddFamilyCard";
import EditFamilyCard from "../components/Family/EditFamilyCard";
import Loader from "react-loader-spinner";
import api from "../api/familyAPI";
import { connect } from "react-redux";
import { setFamilies, removeFamily } from "../actions/familyActions";
import { Link } from "react-router-dom";

const Families = ({ families, setFamilies, removeFamily }) => {
  const getAllFamilies = async () => {
    await api
      .getAllFamilies()
      .then(response => setFamilies(response.data.families));
  };

  useEffect(() => {
    getAllFamilies();
  }, []);

  const deleteFamily = async id => {
    try {
      await api.deleteFamily(id);
      removeFamily(id);
    } catch (err) {
      alert(err);
    }
  };

  const renderFamilies = () => {
    if (!families) {
      return (
        <div className="absolute left-1/2">
          <Loader type="TailSpin" color="#3730A3" height={100} width={100} />
        </div>
      );
    }

    return families.map(family => (
      <div
        key={family.id}
        className="w-familyCard flex flex-col justify-between bg-white p-5 relative rounded-xl h-64"
      >
        <div>
          <img
            src={FamilyIcon}
            alt="family_icon"
            className="border border-1 p-1"
          />
          <h3 className="font-semibold text-lg mt-5">{family.name}</h3>
          <p className="text-gray-500 mt-3 pb-3">{family.description}</p>
        </div>
        <div className="mt-3 border-t border-1 pt-5">
          <div className="w-11/12 flex justify-between float-right">
            <Link
              to="/families/1"
              className="border text-green-500 py-1 px-5 rounded"
            >
              view
            </Link>
            <EditFamilyCard family={family} />
            <button
              className="border border-1 py-1 px-6 rounded text-red-500"
              onClick={() => deleteFamily(family.id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div
      className={`${
        families && families.length === 0
          ? "flex justify-center items-center mt-40"
          : "grid md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-y-16 mt-20"
      }`}
    >
      {renderFamilies()}
      {families && <AddFamilyCard />}
    </div>
  );
};

const mapStateToProps = state => {
  return { families: state.familyReducer.families };
};

export default connect(mapStateToProps, { setFamilies, removeFamily })(
  Families
);

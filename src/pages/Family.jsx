import { useEffect } from "react";
import ProfilePicture from "../images/profile_picture.png";
import { TiDelete } from "react-icons/ti";
import AddMember from "../components/Family/AddMember";
import api from "../api/familyAPI";
import { setFamily, removeFamily } from "../actions/familyActions";
import { connect, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import SharedCars from "../components/Family/SharedCars";
import { useParams, useHistory } from "react-router-dom";

const Family = ({ setFamily, removeFamily }) => {
  const { id } = useParams();
  const history = useHistory();
  const family = useSelector(state => state.familyReducer.family);

  const getFamily = async () => {
    await api.getFamily(id).then(res => setFamily(res.data.family));
  };

  useEffect(() => {
    try {
      getFamily();
    } catch (err) {
      console.log(err);
    }
    console.log(family);
  }, []);

  const deleteFamily = async () => {
    try {
      await api.deleteFamily(id);
      removeFamily(id);
      history.push("/families");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMember = async () => {
    try {
      await api.removeFamily(id);
      removeFamily(id);
    } catch (err) {
      console.log(err);
    }
  };

  const members = [
    { id: "1", name: "Family Member1" },
    { id: "1", name: "Family Member2" },
    { id: "1", name: "Family Member2" },
    { id: "1", name: "Family Member2" },
    { id: "1", name: "Family Member2" },
  ];

  if (!family)
    return (
      <div className="mx-auto mt-20">
        <Loader type="TailSpin" color="#3730A3" height={100} width={100} />
      </div>
    );

  return (
    <>
      <div className="xl:flex gap-20 mt-10">
        <div className="bg-white p-10 w-415 lg:w-585 mb-5 relative">
          <h3 className="text-xl font-bold">{family.name}</h3>
          <p className="mt-5">{family.description}</p>
          <button
            onClick={deleteFamily}
            className="mt-7 w-48 bg-red-600 text-white p-4 rounded-lg absolute bottom-5 left-5"
          >
            Delete
          </button>
        </div>
        <div className="bg-white py-5 px-10 w-415 lg:w-auto">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Family Members</h3>
            <AddMember />
          </div>

          <div className="mt-5 h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-full">
            {members.map(member => (
              <div
                key="1"
                className="flex bg-gray-100 w-96 py-2 justify-around items-center rounded-3xl mt-3"
              >
                <img
                  src={ProfilePicture}
                  alt="family_member"
                  className="w-12 h-12 rounded-full"
                />
                <p className="mr-20 mb-5">{member.name}</p>
                <button onClick={() => deleteMember(member.id)}>
                  <TiDelete className="text-red-600 text-4xl" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SharedCars sharedCars={family.cars} />
    </>
  );
};

export default connect(null, { setFamily, removeFamily })(Family);

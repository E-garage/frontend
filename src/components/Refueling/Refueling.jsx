import { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import Loader from "react-loader-spinner";
import api from "../../api/refuelingAPI";
import AddRefueling from "./AddRefueling";
import EditRefueling from "./EditRefueling";
import { connect } from "react-redux";
import { setRefuelings, removeRefueling } from "../../actions/refuelingActions";

const heads = [
  "Date",
  "Fuel Type",
  "Amount [L]",
  "Total Price [zl]",
  "Receipt",
  "Action",
];

let rows = [
  {
    id: "1",
    date: "15/10/2020",
    FuelType: "gasoline",
    amount: "50l",
    TotalPrice: "200",
    receipt: "file",
  },
  {
    id: "2",
    date: "15/10/2020",
    FuelType: "gasoline",
    amount: "50l",
    TotalPrice: "200",
    receipt: "file",
  },
  {
    id: "3",
    date: "15/10/2020",
    FuelType: "gasoline",
    amount: "50l",
    TotalPrice: "200",
    receipt: "file",
  },
  {
    id: "4",
    date: "15/10/2020",
    FuelType: "gasoline",
    amount: "50l",
    TotalPrice: "200",
    receipt: "file",
  },
];

const Refueling = ({ setRefuelings, removeRefueling }) => {
  const getRefuelings = async () => {
    try {
      await api.getRefuelings().then(res => setRefuelings(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getRefuelings()
  }, []);

  const deleteRefueling = async id => {
    try {
      await api.deleteRefueling(id);
      removeRefueling(id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mx-auto overflow-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-full">
      <div className="bg-indigo-600 w-1187 mx-auto text-white mt-20 relative">
        <h3 className="font-bold p-4 text-2xl text-center">Refueling</h3>
        <AddRefueling />
      </div>
      <table className="border-collapse mx-auto w-1187 bg-white">
        <thead>
          <tr>
            {heads.map(head => (
              <th key={head} className="p-5 bg-indigo-600 text-white">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        {rows ? (
          <tbody>
            {rows.map(row => (
              <tr key={row} className="border-top border">
                {Object.keys(row).map(key => {
                  return (
                    key !== "id" && (
                      <td key={key} className="text-center p-5">
                        {row[key]}
                      </td>
                    )
                  );
                })}
                <td className="p-5">
                  <div className="flex justify-center gap-5 ">
                    <EditRefueling id={row.id} refueling={row} />
                    <button onClick={() => deleteRefueling(row.id)}>
                      <TiDelete className="text-3xl text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <Loader type="TailSpin" color="#3730A3" height={100} width={100} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default connect(null, { setRefuelings, removeRefueling })(Refueling);

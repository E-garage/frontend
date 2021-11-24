import { BiCart } from "react-icons/bi";

const receivers = [
  "Tesco Market1",
  "Tesco Market2",
  "Tesco Market3",
  "Tesco Market4",
];

const TransactionCard = () => (
  <div className="card md:w-500 bg-white p-7 shadow-expenseCard">
    <h3 className="text-xl font-semibold">Transaction history</h3>
    <table className="table-auto mt-5">
      <thead className="text-left">
        <tr>
          <th className="text-gray-400 font-normal">Receiver</th>
          <th className="text-gray-400 font-normal">Type</th>
          <th className="text-gray-400 font-normal">Date</th>
          <th className="text-gray-400 font-normal text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        {receivers.map((receiver, index) => (
          <tr key={index} className="border-b border-1">
            <td className="py-3 flex items-center">
              <span className="bg-gray-200 p-1 mr-2">
                <BiCart />
              </span>
              {receiver}
            </td>
            <td className="text-gray-400 py-3">Shopping</td>
            <td className="text-gray-400 py-3">12 Dec 2020</td>
            <td className="font-semibold text-right py-3">$75.67</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionCard;

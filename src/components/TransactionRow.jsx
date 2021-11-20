import { BiCart } from "react-icons/bi";

const TransactionRow = () => (
  <tr className="border-b border-1">
    <td className="py-3 flex items-center">
      <span className="bg-gray-200 p-1 mr-2">
        <BiCart />
      </span>{" "}
      Tesco Market
    </td>
    <td className="text-gray-400 py-3">Shopping</td>
    <td className="text-gray-400 py-3">12 Dec 2020</td>
    <td className="font-semibold text-right py-3">$75.67</td>
  </tr>
);

export default TransactionRow;

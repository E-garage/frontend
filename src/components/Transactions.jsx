import TransactionCard from "../components/TransactionCard";
import { FiPlus } from "react-icons/fi";

const Transactions = () => (
  <div className="mt-20 grid xl:grid-cols-2 3xl:grid-cols-3 gap-10 items-center place-self-center">
    <TransactionCard />
    <div className="card bg-white p-5 w-96 h-48 shadow-expenseCard cursor-pointer">
      <h3 className="text-xl font-semibold">New transaction</h3>
      <div className="flex flex-col h-full justify-center items-center">
        <span className="bg-yellow-400 rounded-full mt-4 p-2">
          <FiPlus className="text-3xl" />
        </span>
        <p className="mt-4">Add New</p>
      </div>
    </div>
  </div>
);

export default Transactions;

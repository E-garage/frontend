import TransactionRow from "../components/TransactionRow";

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
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
      </tbody>
    </table>
  </div>
);

export default TransactionCard;

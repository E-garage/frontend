const DashboardAction = ({ name, date }) => (
  <div className="flex justify-between items-center mt-5 pr-3">
    <div>
      <p className="text-lg">{name}</p>
      <p className="text-gray-400">Description</p>
    </div>
    <p>{date}</p>
  </div>
);

export default DashboardAction;

const DashboardAction = ({ name, date }) => (
  <div className="flex justify-between items-center mt-5 pr-3">
    <div>
      <h4>{name}</h4>
      <p className="text-gray-400">Description</p>
    </div>
    <p>{date}</p>
  </div>
);

export default DashboardAction;

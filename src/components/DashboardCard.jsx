const DashboardCard = ({ name, children }) => (
  <div className="w-517 h-96 bg-white rounded-lg p-5">
    <h3 className="text-xl">{name}</h3>
    {children}
  </div>
);

export default DashboardCard;

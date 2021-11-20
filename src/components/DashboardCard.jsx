const DashboardCard = ({ name, children }) => (
  <div className="w-450 2xl:w-517 h-96 bg-white rounded-lg p-5 mt-5 lg:ml-10 3xl:ml-0 first:ml-0 shadow-card">
    <h3 className="text-xl">{name}</h3>
    {children}
  </div>
);

export default DashboardCard;

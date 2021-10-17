const FormInput = ({ icon, label, ...props }) => {
  return (
    <div className="flex items-center bg-gray-200 px-4 py-3 rounded-md first:mt-0 mt-5">
      {icon}
      <div className="ml-5 w-full">
        <label htmlFor="login-email" className="text-sm">
          {label}
        </label>
        <input
          {...props}
          className="block bg-gray-200 text-md font-bold w-full outline-none"
        />
      </div>
    </div>
  );
};

export default FormInput;

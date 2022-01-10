import { Field } from "formik";

const FormInput = ({ icon, label, id, error, ...props }) => (
  <div className="flex items-center bg-gray-200 px-4 py-3 rounded-md first:mt-0 mt-14 relative">
    {icon}
    <div className="ml-5 w-full">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <Field
        id={id}
        {...props}
        className="block bg-gray-200 text-md font-bold w-full outline-none"
      />
    </div>
    {error && <p className="absolute top-20 left-0 text-red-600">{error}</p>}
  </div>
);

export default FormInput;

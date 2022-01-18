import { Field } from "formik";

const CarSpecInput = ({ id, label, name, error }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <label htmlFor={id}>{label}: </label>
      <div className="relative">
        <Field
          id={id}
          placeholder={`${label}...`}
          name={name}
          className={`border w-80 rounded outline-none p-1 ${
            error && "border-red-500"
          }`}
        />
        {error && (
          <p className="text-red-500 absolute -bottom-4 text-sm">{error}</p>
        )}
      </div>
    </div>
  );
};

export default CarSpecInput;

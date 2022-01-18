import { useState } from "react";
import api from "../../api/carsAPI";
import { connect, useSelector } from "react-redux";
import { setDetails } from "../../actions/carActions";
import { Formik, Form } from "formik";
import CarSpecInput from "./CarSpecInput";
import * as yup from "yup";

const MESSAGE = 'This Field must be a number!'

const carSpecsSchema = yup.object().shape({
  engine_capacity: yup.number().typeError(MESSAGE),
  horse_power: yup.number().typeError(MESSAGE),
  sits: yup.number().typeError(MESSAGE),
  doors: yup.number().typeError(MESSAGE),
  color: yup.string(),
  drivetrain: yup.string(),
  body: yup.string(),
  Feul_Type: yup.string(),
  mileage: yup.number().typeError(MESSAGE),
});

const initialValues = {
  engine_capacity: "",
  horse_power: "",
  sits: "",
  doors: "",
  color: "",
  drivetrain: "",
  body: "",
  Feul_Type: "",
  mileage: "",
};

const specs = [
  { id: "engine-capacity", label: "Engine Capacity", name: "engine_capacity" },
  { id: "horse-power", label: "Horse Power [hp]", name: "horse_power" },
  { id: "sits", label: "Sits", name: "sits" },
  { id: "doors", label: "Doors", name: "doors" },
  { id: "color", label: "Color", name: "color" },
  { id: "drivetrain", label: "Drivetrain", name: "drivetrain" },
  { id: "body", label: "Body", name: "body" },
  { id: "fuel-type", label: "Fuel Type", name: "Fuel_Type" },
  { id: "mileage", label: "Mileage [km]", name: "mileage" },
];

const EditCarSpecsForm = ({ setDetails, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const carId = useSelector(state => state.carReducer.car.id)

  const handleSubmit = async values => {
    console.log(values)
    setLoading(true);
    try {
      await api.updateDetails(carId, values);
      setDetails(values);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
      closeModal();
    }
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={carSpecsSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form>
          <h3 className="text-xl font-semibold mb-10">Edit specifications</h3>
          {specs.map(spec => (
            <CarSpecInput
              key={spec.id}
              id={spec.id}
              label={spec.label}
              name={spec.name}
              error={errors[spec.name]}
            />
          ))}
          <div className="flex justify-center">
            <button className="w-48 bg-indigo-600 text-white p-3 rounded-lg">
              {loading ? "Loading..." : "Save"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { setDetails }) (EditCarSpecsForm) ;

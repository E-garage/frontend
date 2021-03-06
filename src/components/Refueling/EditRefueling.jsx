import { useState } from "react";
import Modal from "react-modal";
import { Formik, Form } from "formik";
import api from "../../api/refuelingAPI";
import * as yup from "yup";
import RefuelingInput from "./RefuelingInput";
import { FiEdit } from "react-icons/fi";
import { connect } from "react-redux";
import { updateRefueling } from "../../actions/refuelingActions";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "100",
  },
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    padding: "20px 25px",
  },
};

const formInputs = [
  { id: "engine-capacity", label: "Date", name: "date" },
  { id: "horse-power", label: "Fuel Type", name: "FuelType" },
  { id: "sits", label: "Amount", name: "amount" },
  { id: "doors", label: "Total Price", name: "TotalPrice" },
  { id: "color", label: "Receipt", name: "receipt" },
];

const refuelingSchema = yup.object().shape({
  date: yup.string(),
  FuelType: yup.string(),
  amount: yup.number().typeError("This field must be a number"),
  TotalPrice: yup.number().typeError("This field must be a number"),
  receipt: yup.string(),
});

const EditRefueling = ({ refueling }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async values => {
    setLoading(true);
    console.log(values);
    try {
      await api.addRefueling(values);
      updateRefueling(values)
    } catch {
      alert("Failed to add family card");
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const initialValues = {
    ...refueling
  };

  return (
    <>
      <button onClick={openModal}>
        <FiEdit className="text-2xl text-blue-500" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={refuelingSchema}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form>
              <h3 className="text-xl font-semibold mb-10">Edit Refueling</h3>
              {formInputs.map(formInput => (
                <RefuelingInput
                  key={formInput.id}
                  id={formInput.id}
                  label={formInput.label}
                  name={formInput.name}
                  error={errors[formInput.name]}
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
      </Modal>
    </>
  );
};

export default connect(null, { updateRefueling })(EditRefueling) ;

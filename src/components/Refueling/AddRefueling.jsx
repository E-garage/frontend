import { useState } from "react";
import Modal from "react-modal";
import { Formik, Form } from "formik";
import api from "../../api/refuelingAPI";
import * as yup from "yup";
import RefuelingInput from "./RefuelingInput";
import { connect } from "react-redux";
import { addRefueling } from "../../actions/refuelingActions";

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
];

const refuelingSchema = yup.object().shape({
  date: yup.string(),
  FuelType: yup.string(),
  amount: yup.number().typeError("This field must be a number"),
  TotalPrice: yup.number().typeError("This field must be a number"),
});

const initialValues = {
  date: "",
  FuelType: "",
  amount: "",
  TotalPrice: "",
};

const AddRefueling = ({ addRefueling }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [receipt, setReceipt] = useState(null)

  const [loading, setLoading] = useState(false);

  const handleSubmit = async values => {
    setLoading(true);
    console.log(values);
    try {
      let formData = new FormData();
      formData.append("receipt", receipt, receipt.name);
      await api.addRefueling( { ...values, formData } );
      addRefueling({ ...values, formData })
    } catch {
      alert("Failed to add refueling");
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

  const onFileChange = (e) => {
    setReceipt(e.target.files[0])
  }

  return (
    <>
      <button
        onClick={openModal}
        className="absolute bg-green-500 p-2 rounded right-7 top-4"
      >
        Add Refueling
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
              <h3 className="text-xl font-semibold mb-10">Add Refueling</h3>
              {formInputs.map(formInput => (
                <RefuelingInput
                  key={formInput.id}
                  id={formInput.id}
                  label={formInput.label}
                  name={formInput.name}
                  error={errors[formInput.name]}
                />
              ))}
              <input type="file" onChange={onFileChange} />
              <div className="flex justify-center">
                <button className="w-48 mt-5 bg-indigo-600 text-white p-3 rounded-lg">
                  {loading ? "Loading..." : "Add"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default connect(null, addRefueling)(AddRefueling);

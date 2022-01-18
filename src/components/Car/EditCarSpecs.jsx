import { useState } from "react";
import Modal from "react-modal";
import EditCarSpecsForm from "./EditCarSpecsForm";

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

const EditCarSpecs = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="mt-7 w-48 bg-indigo-600 text-white p-3 rounded-lg"
        onClick={openModal}
      >
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <EditCarSpecsForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default EditCarSpecs;

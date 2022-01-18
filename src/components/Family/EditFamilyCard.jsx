import { useState } from "react";
import Modal from "react-modal";
import EditFamilyCardForm from "./EditFamilyCardForm"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "500px",
    height: "500px",
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

const EditFamilyCard = ({ family }) => {
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
        className="border border-1 py-1 px-6 rounded text-blue-500"
        onClick={openModal}
      >
        edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EditFamilyCardForm family={family} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default EditFamilyCard

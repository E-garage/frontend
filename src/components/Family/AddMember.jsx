import { useState } from "react";
import Modal from "react-modal";
import AddMemberForm from './AddMemberForm'

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "100",
  },
  content: {
    width: "500px",
    height: "400px",
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

const AddMember = () => {
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
        className="bg-indigo-600 text-white px-2 rounded-lg"
        onClick={openModal}
      >
        Add Member
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <AddMemberForm />
      </Modal>
    </>
  );
};

export default AddMember;

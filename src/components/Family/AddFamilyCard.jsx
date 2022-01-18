import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-modal";
import FamilyForm from "./FamilyForm";

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

const AddFamilyCard = ({ familyCards, setFamilyCards }) => {
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
        className="bg-white px-10 py-5 w-familyCard h-64 rounded-xl"
        onClick={openModal}
      >
        <div className="flex flex-col justify-center items-center border border-black h-52 rounded-2xl cursor-pointer">
          <AiOutlinePlus className="text-3xl" />
          <p>Create your family</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FamilyForm
          familyCards={familyCards}
          setFamilyCards={setFamilyCards}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default AddFamilyCard;

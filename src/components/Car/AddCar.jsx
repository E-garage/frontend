import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-modal";

import CarForm from "./CarForm";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "100",
  },
  content: {
    width: "500px",
    height: "700px",
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

const AddCar = () => {
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
        className="flex flex-col justify-center items-center border border-black h-96 w-96 xl:w-auto rounded-2xl cursor-pointer"
        onClick={openModal}
      >
        <AiOutlinePlus className="text-3xl" />
        <p>Add a new car</p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <CarForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default AddCar;

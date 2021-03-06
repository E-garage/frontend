import { useState, useRef } from "react";
import api from "../../api/carsAPI";
import { useSelector } from "react-redux";
import { setCar } from "../../actions/carActions";
import { Formik, Form, Field } from "formik";
import defaultCar from "../../images/default_car.png";
import { connect } from 'react-redux'

const EditCarForm = ({ setCar, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(defaultCar);
  const uploadButton = useRef();
  const car = useSelector(state => state.carReducer.car);

  const handleSubmit = async values => {
    setLoading(true);
    try {
      await api.updateCar(car.id, values);
      setCar(values);
    } catch {
      alert("Failed to add family card");
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const validateBrand = value => {
    if (!value) return "Required!";
  };

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUpload = () => {
    uploadButton.current.click();
  };

  return (
    <Formik
      initialValues={{
        thumbnail: "",
        brand: car.brand,
        description: car.description,
      }}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form>
          <h3 className="text-xl font-semibold mb-5">Add Your Car</h3>
          <img
            src={image}
            alt="preview image"
            className="mb-5 h-48 rounded-xl"
          />
          <input
            type="file"
            ref={uploadButton}
            name="thumbnail"
            onChange={onImageChange}
            className="mb-5 hidden"
            accept="image/*"
          />
          <button
            onClick={handleUpload}
            className="block bg-indigo-800 text-white text-lg py-1 w-1/2 px-3 rounded-lg mb-5"
          >
            Upload Image
          </button>
          <label htmlFor="car-brand">Car Brand</label>
          <div className="relative">
            <Field
              name="brand"
              id="car-brand"
              className={`block outline-none border w-full h-10 rounded-md pl-2 mb-10 ${
                errors.brand && "border-red-500"
              }`}
              placeholder="Brand..."
              validate={validateBrand}
            />
            {errors.brand && (
              <p className="text-red-500 absolute -bottom-6">{errors.brand}</p>
            )}
          </div>

          <label htmlFor="car-description">Description</label>
          <Field
            id="car-description"
            name="description"
            as="textarea"
            placeholder="Description..."
            rows="5"
            className="block outline-none border w-full rounded-md p-2 resize-none"
          />

          <div className="flex flex-col justify-between items-center mt-8">
            <button
              disabled={loading}
              className="bg-indigo-800 text-white text-lg py-1 w-3/4 mx-auto px-3 rounded-lg"
            >
              {loading ? "Loading..." : "Save"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { setCar }) (EditCarForm);

import { useState } from "react";
import api from "../../api/familyAPI";
import { connect } from "react-redux";
import { editFamily } from "../../actions/familyActions";
import { Formik, Form, Field } from "formik";

const EditFamilyCardForm = ({ family, editFamily, closeModal }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async values => {
    console.log(values)
    setLoading(true);
    try {
      await api.updateFamily(family.id, values);
      editFamily(family.id, values);
    } catch {
      console.log("Failed to edit family card");
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const validateName = value => {
    if (!value) return "Name is required!";
    if (value.length < 5) return "Name must have at least 5 characters!";
  };

  return (
    <Formik
      initialValues={{ name: family.name, description: family.description }}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form>
          <h3 className="text-xl font-semibold mb-5">Add your family</h3>
          <div className="relative">
            <label>Family Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Family Name..."
              validate={validateName}
              className={`block outline-none bg-gray-200 w-full h-10 rounded-md pl-2 mb-10 ${
                errors.name && "border border-red-500"
              }`}
            />
            {errors.name && (
              <p className="absolute text-red-500 -bottom-6">{errors.name}</p>
            )}
          </div>
          <label>Description</label>
          <Field
            as="textarea"
            placeholder="Description..."
            rows="5"
            name="description"
            className="block outline-none bg-gray-200 w-full rounded-md p-2 resize-none"
          />
          <div className="flex justify-center mt-10">
            <button
              disabled={loading}
              className="bg-indigo-800 text-white text-lg py-1 w-3/4  px-3 rounded-lg"
            >
              {loading ? "Loading..." : "Save"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default connect(null, { editFamily }) (EditFamilyCardForm) 

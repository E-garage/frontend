import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import api from '../../api/authAPI'
import { setUser } from '../../actions/authActions'
import { connect } from 'react-redux'

const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be 3 to 50 characters!")
    .max(50, "Name must be 3 to 50 characters!")
    .required("Name is Required!"),
  email: yup.string().email("Invalid email!").required("Email is required!"),
});

const EditAccountForm = ({ setUser, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async values => {
    setLoading(true);
    setUser(values);
    setLoading(false);
    closeModal();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form>
          <h3 className="text-xl font-semibold mb-10">Edit Account</h3>
          <label htmlFor="username">Username: </label>
          <div className="relative">
            <Field
              id="username"
              name="name"
              className="block border w-full rounded p-2 outline-none mb-10"
              placeholder="Username..."
            />
            {errors.name && (
              <p className="absolute -bottom-6 text-red-500">{errors.name}</p>
            )}
          </div>

          <label htmlFor="email">Email</label>
          <div className="relative">
            <Field
              id="email"
              name="email"
              className="block border w-full rounded p-2 outline-none"
              placeholder="Email..."
            />
            {errors.email && (
              <p className="absolute -bottom-6 text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button className="mt-10 w-48 bg-indigo-600 text-white p-3 rounded-lg">
              {loading ? "Loading..." : "Save"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect (null, { setUser }) (EditAccountForm);

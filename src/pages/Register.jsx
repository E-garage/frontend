import { useState } from "react";
import PhoneImg from "../images/Illustrationphone.png";
import { FaUserAlt, FaEnvelope, FaKey, FaRegCheckCircle } from "react-icons/fa";
import FormInput from "../components/Auth/FormInput";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import api from "../api/authAPI";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be 3 to 50 characters!")
    .max(50, "Name must be 3 to 50 characters!")
    .required("Name is Required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .min(8, "Password must be 8 to 50 characters!")
    .max(50, "Password must be 8 to 50 characters!")
    .required("Password is required!"),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match!"
  ),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const Register = () => {
  const [emailExists, setEmailExists] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async values => {
    console.log(values)
    try {
      await api.register(values)
      setIsSuccess(true);
    } catch {
      setEmailExists(true);
    }
  };

  if (isSuccess)
    return (
      <div className="bg-white h-screen text-black">
        <div className="flex justify-center flex-col items-center h-4/5">
          <FaRegCheckCircle className="text-9xl text-green-500" />
          <p className="text-3xl mt-10">Registration completed successfully</p>
          <p className="mt-2 text-lg">
            Please check your registered email for email verification
          </p>
          <Link
            to="/login"
            className="w-48 mt-7 bg-indigo-600 text-white text-center p-5 rounded-lg"
          >
            Continue
          </Link>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
      <img src={PhoneImg} alt="car_img" />
      <div className="bg-white md:w-5/12 border rounded-lg py-10 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
        <h1 className="text-4xl">Welcome to</h1>
        <h2 className="text-indigo-600 text-5xl font-extrabold mt-1">
          E-garage
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="mt-12">
              <FormInput
                icon={<FaUserAlt className="text-3xl" />}
                name="name"
                id="register-name"
                label="Name"
                type="text"
                placeholder="Name"
                error={errors.name && touched.name && errors.name}
              />
              <FormInput
                icon={<FaEnvelope className="text-3xl" />}
                name="email"
                id="register-email"
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                error={
                  errors.email
                    ? touched.email && errors.email
                    : emailExists && "Email Exists!"
                }
              />
              <FormInput
                icon={<FaKey className="text-3xl" />}
                name="password"
                id="register-password"
                label="Password"
                type="password"
                placeholder="password"
                error={errors.password && touched.password && errors.password}
              />
              <FormInput
                icon={<FaKey className="text-3xl" />}
                name="password_confirmation"
                id="register-confirm-password"
                label="Confirm Password"
                type="password"
                placeholder="confirm password"
                error={
                  errors.password_confirmation &&
                  touched.password_confirmation &&
                  errors.password_confirmation
                }
              />
              <button className="w-full mt-12 bg-indigo-600 text-white p-5 rounded-lg">
                Register
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-12 text-center">
          Do you have an account?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

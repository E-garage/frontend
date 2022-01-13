import { useState } from "react";
import CarImg from "../images/car.png";
import { FaEnvelope, FaRegCheckCircle } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import api from "../api/apiAuth";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email!").required("Email is required!"),
});

const initialValues = {
  email: "",
};

const ForgotPassword = () => {
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async values => {
    try {
      await api.login(values).then(res => {
        console.log(res.data);
      });
      setIsSuccess(true)
    } catch {
      setError(true);
    }
  };

  if(isSuccess) return (
    <div className="bg-white h-screen text-black">
        <div className="flex justify-center flex-col items-center h-4/5">
          <FaRegCheckCircle className="text-9xl text-green-500" />
          <p className="text-6xl mt-10">Success!</p>
          <p className="mt-5 text-lg">
            Password reset request was sent successfully. Please check your email to reset your password.
          </p>
          <Link
            to="/login"
            className="w-48 mt-7 bg-indigo-600 text-white text-center p-5 rounded-lg"
          >
            Continue
          </Link>
        </div>
      </div>
  )

  return (
    <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
      <img src={CarImg} alt="car_img" />
      <div className="bg-white md:w-5/12 border rounded-lg py-8 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
        <h1 className="text-4xl">Welcome to</h1>
        <h2 className="text-indigo-600 text-5xl font-extrabold mt-1">
          E-garage
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form className="mt-8 relative">
              <p className="-mb-10">Enter your email address and we we&apos;ll send you a link to reset your password.</p>
              {error && (
                <div className="text-red-500 text-center -mb-10 mt-12">
                  Incorrect e-mail!
                </div>
              )}
            
              <FormInput
                icon={<FaEnvelope className="text-3xl" />}
                id="login-email"
                name="email"
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                error={errors.email ?? null}
              />
              <button className="w-full mt-12 bg-indigo-600 text-white p-5 rounded-lg">
                Reset Password
              </button>
              <div className="m-10 text-center">
                <Link to="/login" className="text-indigo-600">
                  Back to login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;

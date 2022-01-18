import { useState } from "react";
import PhoneImg from "../images/Illustrationphone.png";
import { FaKey, FaRegCheckCircle } from "react-icons/fa";
import FormInput from "../components/Auth/FormInput";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import api from "../api/resetPasswordAPI";
import { useLocation } from 'react-router-dom'
import * as qs from 'qs'

const registerSchema = Yup.object().shape({
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
  password: "",
  password_confirmation: "",
};

const Register = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation()
  const params = qs.parse(location.search, { ignoreQueryPrefix: true })

  const handleSubmit = async values => {
    
    try {
      console.log({ ...params, ...values })
      await api.resetPassword({ ...params, ...values });
      setIsSuccess(true);
    } catch(err) {
      console.log(err)
    }
  };

  if (isSuccess)
    return (
      <div className="bg-white h-screen text-black">
        <div className="flex justify-center flex-col items-center h-4/5">
          <FaRegCheckCircle className="text-9xl text-green-500" />
          <p className="text-3xl mt-10">Password Changed!</p>
          <p className="mt-2 text-lg">
            Your password has been changed successfully.
          </p>
          <Link
            to="/login"
            className="w-48 mt-7 bg-indigo-600 text-white text-center p-5 rounded-lg"
          >
            Back to Login
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
            <p className="-mb-10">Please enter your new password here.</p>
              <FormInput
                icon={<FaKey className="text-3xl" />}
                name="password"
                id="new-password"
                label="New Password"
                type="password"
                placeholder="new password"
                error={errors.password && touched.password && errors.password}
              />
              <FormInput
                icon={<FaKey className="text-3xl" />}
                name="password_confirmation"
                id="confirm-confirm-password"
                label="Confirm New Password"
                type="password"
                placeholder="confirm new password"
                error={
                  errors.password_confirmation &&
                  touched.password_confirmation &&
                  errors.password_confirmation
                }
              />
              <button className="w-full mt-12 bg-indigo-600 text-white p-5 rounded-lg">
                Reset Password
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

import CarImg from "../images/car.png";
import GoogleIcon from "../images/google-icon.svg";
import FacebookIcon from "../images/facebook-icon.svg";
import { FaEnvelope, FaKey } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  return (
    <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
      <img src={CarImg} alt="car_img" />
      <div className="bg-white md:w-5/12 border rounded-lg py-10 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
        <h1 className="text-4xl">
          Welcome to <br />
          <span className="text-indigo-600 text-5xl font-extrabold">
            E-garage
          </span>
        </h1>

        <Link
          to="/login"
          className="w-full shadow-loginSocial mt-16 p-5 rounded-lg block text-center"
        >
          <img
            src={GoogleIcon}
            alt="google_icon"
            width="30"
            className="inline"
          />{" "}
          Login with Google
        </Link>

        <Link
          to="/login"
          className="w-full shadow-loginSocial mt-5 p-5 rounded-lg block text-center"
        >
          <img
            src={FacebookIcon}
            alt="facebook_icon"
            width="30"
            className="inline"
          />{" "}
          Login with Facebook
        </Link>

        <div className="flex items-center justify-between mt-8">
          <span className="w-9/25 h-px bg-gray-300" />
          <span>OR</span>
          <span className="w-9/25 h-px bg-gray-300" />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors }) => (
            <Form className="mt-8">
              <FormInput
                icon={<FaEnvelope className="text-3xl" />}
                id="login-email"
                name="email"
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                error={errors.email ? errors.email : null}
              />

              <FormInput
                icon={<FaKey className="text-3xl" />}
                id="login-password"
                name="password"
                label="Password"
                type="password"
                placeholder="password"
                error={errors.password ? errors.password : null}
              />

              <div className="mt-16 flex justify-between">
                <div className="flex items center">
                  <input
                    id="login-checkbox"
                    type="checkbox"
                    className="checkbox bg-gray-100 border-gray-300 rounded-md"
                  />
                  <label htmlFor="login-checkbox" className="ml-2">
                    Remember me
                  </label>
                </div>
                <Link to="/login" className="text-indigo-600">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full mt-7 bg-indigo-600 text-white p-5 rounded-lg"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-12 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-indigo-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

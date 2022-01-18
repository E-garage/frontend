import { useState } from "react";
import CarImg from "../images/car.png";
import GoogleIcon from "../images/google-icon.svg";
import FacebookIcon from "../images/facebook-icon.svg";
import { FaEnvelope, FaKey } from "react-icons/fa";
import FormInput from "../components/Auth/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import api from "../api/authAPI";
import { Link, useHistory } from "react-router-dom";
import { login } from "../actions/authActions";
import { connect } from "react-redux";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const initialValues = {
  email: localStorage.getItem("rememberme") || "",
  password: "",
};

const Login = ({ login }) => {
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("rememberme") ? true : false
  );
  const history = useHistory();

  const handleSubmit = async values => {
    try {
      await api.login(values).then(res => {
        login(res.data);
        if (rememberMe)
          localStorage.setItem("rememberme", res.data.user.email);
        else localStorage.removeItem("rememberme");
        history.push("/");
      })
    } catch (err) {
      console.log(err)
      setError(true);
      setTimeout(() => { 
        setError(false)
      }, 5000);
    }
  };

  const toggleRememberMe = () => setRememberMe(value => !value);

  return (
    <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
      <img src={CarImg} alt="car_img" />
      <div className="bg-white md:w-5/12 border rounded-lg py-8 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
        <h1 className="text-4xl">Welcome to</h1>
        <h2 className="text-indigo-600 text-5xl font-extrabold mt-1">
          E-garage
        </h2>

        <Link
          to="/login"
          className="w-full shadow-loginSocial mt-12 p-5 rounded-lg block text-center"
        >
          <img
            src={GoogleIcon}
            alt="google_icon"
            width="30"
            className="inline mr-2"
          />
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
          />
          Login with Facebook
        </Link>

        <div className="flex items-center justify-between mt-8">
          <span className="w-9/25 h-px bg-gray-300" />
          <span>OR</span>
          <span className="w-9/25 h-px bg-gray-300" />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form className="mt-8 relative">
              {error && (
                <div className="text-red-500 text-center -mb-10 -mt-5">
                  Incorrect e-mail or password!
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
              <FormInput
                icon={<FaKey className="text-3xl" />}
                id="login-password"
                name="password"
                label="Password"
                type="password"
                placeholder="password"
                error={errors.password ?? null}
              />

              <div className="mt-12 flex justify-between">
                <div className="flex items center">
                  <input
                    id="login-checkbox"
                    type="checkbox"
                    checked={rememberMe}
                    value={rememberMe}
                    onChange={toggleRememberMe}
                    className="checkbox bg-gray-100 border-gray-300 rounded-md"
                  />
                  <label htmlFor="login-checkbox" className="ml-2">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-indigo-600">
                  Forgot Password?
                </Link>
              </div>

              <button className="w-full mt-7 bg-indigo-600 text-white p-5 rounded-lg">
                Login
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-10 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-indigo-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default connect(null, { login })(Login);

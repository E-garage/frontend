import PhoneImg from "../images/Illustrationphone.png";
import { FaUserAlt, FaEnvelope, FaKey } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Name must be 3 to 50 characters!")
    .max(50, "Name must be 3 to 50 characters!")
    .required("Name is Required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .min(8, "Password must be 8 to 50 characters!")
    .max(50, "Password must be 8 to 50 characters!")
    .required("Password is required!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match!"
  ),
});

const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => (
  <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
    <img src={PhoneImg} alt="car_img" />
    <div className="bg-white md:w-5/12 border rounded-lg py-10 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
      <h1 className="text-4xl">
        Welcome to <br />
        <span className="text-indigo-600 text-5xl font-extrabold">
          E-garage
        </span>
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}
      >
        {({ errors, touched }) => (
          <Form className="mt-12">
            <FormInput
              icon={<FaUserAlt className="text-3xl" />}
              name="userName"
              id="register-name"
              label="Name"
              type="text"
              placeholder="Name"
              error={
                errors.userName && touched.userName ? errors.userName : null
              }
            />

            <FormInput
              icon={<FaEnvelope className="text-3xl" />}
              name="email"
              id="register-email"
              label="Email"
              type="email"
              placeholder="example@gmail.com"
              error={errors.email && touched.email ? errors.email : null}
            />

            <FormInput
              icon={<FaKey className="text-3xl" />}
              name="password"
              id="register-password"
              label="Password"
              type="password"
              placeholder="password"
              error={
                errors.password && touched.password ? errors.password : null
              }
            />

            <FormInput
              icon={<FaKey className="text-3xl" />}
              name="confirmPassword"
              id="register-confirm-password"
              label="Confirm Password"
              type="password"
              placeholder="confirm password"
              error={
                errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : null
              }
            />

            <button
              type="submit"
              className="w-full mt-12 bg-indigo-600 text-white p-5 rounded-lg"
            >
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

export default Register;

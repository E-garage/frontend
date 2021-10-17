import PhoneImg from "../images/Illustrationphone.png";
import { FaUserAlt, FaEnvelope, FaKey } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
      <img src={PhoneImg} alt="car_img" />
      <div className="bg-white md:w-5/12 border rounded-lg py-10 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
        <h1 className="text-4xl">
          Welcome to <br />
          <span className="text-indigo-600 text-5xl font-extrabold">
            E-garage
          </span>
        </h1>

        <form className="mt-12">
          <FormInput
            icon={<FaUserAlt className="text-3xl" />}
            id="register-name"
            label="Name"
            type="text"
            placeholder="Name"
          />

          <FormInput
            icon={<FaEnvelope className="text-3xl" />}
            id="register-email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          />

          <FormInput
            icon={<FaKey className="text-3xl" />}
            id="register-password"
            label="Password"
            type="password"
            placeholder="password"
          />

          <FormInput
            icon={<FaKey className="text-3xl" />}
            id="register-confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="confirm password"
          />

          <button
            type="submit"
            className="w-full mt-12 bg-indigo-600 text-white p-5 rounded-lg"
          >
            Login
          </button>

          <p className="mt-12 text-center">
            Do you have an account?{" "}
            <Link to="/login" className="text-indigo-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

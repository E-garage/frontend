import React from 'react';
import PhoneImg from '../images/Illustrationphone.png';
import { FaUserAlt, FaEnvelope, FaKey } from 'react-icons/fa';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
      <img src={PhoneImg} alt="car_img" />
      <div className="bg-white md:w-5/12 border rounded-lg py-10 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
        <h1 className="text-4xl">Welcome to</h1>
        <h1 className="text-indigo-600 text-5xl font-extrabold mt-4">
          E-garage
        </h1>

        <form className="mt-8">
          <LoginInput
            id="register-name"
            label="Name"
            type="text"
            placeholder="Name"
          >
            <FaUserAlt className="text-3xl" />
          </LoginInput>

          <LoginInput
            id="register-email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          >
            <FaEnvelope className="text-3xl" />
          </LoginInput>

          <LoginInput
            id="register-password"
            label="Password"
            type="password"
            placeholder="password"
          >
            <FaKey className="text-3xl" />
          </LoginInput>

          <LoginInput
            id="register-confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="confirm password"
          >
            <FaKey className="text-3xl" />
          </LoginInput>

          <button
            type="submit"
            className="w-full mt-12 bg-indigo-600 text-white p-5 rounded-lg"
          >
            Login
          </button>

          <p className="mt-12 text-center">
            Do you have an account?{' '}
            <Link to="/" className="text-indigo-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

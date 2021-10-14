import React from 'react';
import CarImg from '../images/car.png';
import GoogleIcon from '../images/google-icon.svg';
import FacebookIcon from '../images/facebook-icon.svg';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="bg-gray-100 h-screen md:flex items-center justify-around py-10 text-black">
      <img src={CarImg} alt="car_img"/>
      <div className="bg-white md:w-5/12 border rounded-lg py-10 pl-16 pr-12 font-poppins min-w-96 md:min-w-loginPage">
        <h1 className="text-4xl">Welcome to</h1>
        <h1 className="text-indigo-600 text-5xl font-extrabold mt-4">
          E-garage
        </h1>

        <button className="w-full shadow-loginSocial mt-12 p-5 rounded-lg">
          <img
            src={GoogleIcon}
            alt="google_icon"
            width="30"
            className="inline"
          />{' '}
          Login with Google
        </button>

        <button className="w-full shadow-loginSocial mt-5 p-5 rounded-lg">
          <img
            src={FacebookIcon}
            alt="facebook_icon"
            width="30"
            className="inline"
          />{' '}
          Login with Facebook
        </button>

        <div className="flex items-center justify-between mt-8">
          <span className="w-9/25 h-px bg-gray-300" />
          OR
          <span className="w-9/25 h-px bg-gray-300" />
        </div>

        <form className="mt-8">

          <LoginInput
            id="login-email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          >
            <FaEnvelope className="text-3xl" />
          </LoginInput>

          <LoginInput
            id="login-password"
            label="Password"
            type="password"
            placeholder="password"
          >
            <FaKey className="text-3xl" />
          </LoginInput>

          <div className="mt-6 flex justify-between">
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
            <a href="/" className="text-indigo-600">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-7 bg-indigo-600 text-white p-5 rounded-lg"
          >
            Login
          </button>

          <p className="mt-12 text-center">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-indigo-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';

function LoginInput(props) {
  return (
    <div className="flex items-center bg-gray-200 px-4 py-3 rounded-md first:mt-0 mt-5">
      {props.children}
      <div className="ml-5 w-full">
        <label htmlFor="login-email" className="text-sm">
          {props.label}
        </label>
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className="block bg-gray-200 text-md font-bold w-full"
        />
      </div>
    </div>
  );
}

export default LoginInput;

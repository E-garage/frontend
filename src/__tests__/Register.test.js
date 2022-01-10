import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Register from "../pages/Register";
import { BrowserRouter as Router } from "react-router-dom";

const MockRegister = ({ onSubmit }) => (
  <Router>
    <Register onSubmit={onSubmit} />
  </Router>
);

describe("Render Register Page", () => {
  test("Render title", () => {
    render(<MockRegister onSubmit={jest.fn()} />);

    expect(
      screen.getByRole("heading", { name: /e-garage/i })
    ).toBeInTheDocument();
  });

  test("Render name input", () => {
    render(<MockRegister onSubmit={jest.fn()} />);

    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
  });

  test("Render email input", () => {
    render(<MockRegister onSubmit={jest.fn()} />);

    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
  });

  test("Render password", () => {
    render(<MockRegister onSubmit={jest.fn()} />);

    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
  });

  test("Render confirm password", () => {
    render(<MockRegister onSubmit={jest.fn()} />);

    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  });

  test("Render submit button", () => {
    render(<MockRegister onSubmit={jest.fn()} />);

    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });
});

const testFunction = (
  state,
  description,
  name,
  email,
  password,
  confirmPassword = password
) => {
  test(description, async () => {
    const onSubmit = jest.fn();
    render(<MockRegister onSubmit={onSubmit} />);

    userEvent.type(screen.getByRole("textbox", { name: /name/i }), name);
    userEvent.type(screen.getByRole("textbox", { name: /email/i }), email);
    userEvent.type(screen.getByPlaceholderText("password"), password);
    userEvent.type(screen.getByLabelText(/confirm password/i), confirmPassword);

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() =>
      state
        ? expect(onSubmit).toHaveBeenCalled()
        : expect(onSubmit).not.toHaveBeenCalled()
    );
  });
};

let name = "User";
let email = "dsfafdsl@gmail.com";
let password = "password";

describe("Check register validation", () => {
  testFunction(
    true,
    "the form should be submitted, if all data are valid",
    name,
    email,
    password
  );
  testFunction(
    false,
    "if the user name is missing, the form should not be submitted",
    "",
    email,
    password
  );
  testFunction(
    false,
    "if the email is missing, the form should not be submitted",
    name,
    "",
    password
  );
  testFunction(
    false,
    "if the password is missing, the form should not be submitted",
    name,
    email,
    ""
  );
  testFunction(
    false,
    "if the confirm password is missing, the form should not be submitted",
    name,
    email,
    password,
    ""
  );
  testFunction(
    false,
    "if the password and the confirm password are different, the form should not be submitted",
    name,
    email,
    password,
    "password1"
  );
  testFunction(
    false,
    "if the email is not valid, the form should not be submitted",
    name,
    "sdlfk@fsdlakf.com",
    password
  );
  testFunction(
    false,
    "if the user name has less than 3 characters, the form should not be submitted",
    "us",
    email,
    password
  );
  testFunction(
    false,
    "if the user name has more than 3 characters, the form should not be submitted",
    "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    email,
    password
  );
  testFunction(
    false,
    "if the password name has less than 8 characters, the form should not be submitted",
    name,
    email,
    "passwor"
  );
  testFunction(
    false,
    "if the password name has more than 50 characters, the form should not be submitted",
    name,
    email,
    "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
  );
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

const MockLogin = ({ onSubmit }) => (
  <Router>
    <Login onSubmit={onSubmit} />
  </Router>
);

describe("Render Login Page", () => {
  test("Render title", () => {
    render(<MockLogin onSubmit={jest.fn()} />);

    expect(
      screen.getByRole("heading", { name: /e-garage/i })
    ).toBeInTheDocument();
  });

  test("Render email input", () => {
    render(<MockLogin onSubmit={jest.fn()} />);

    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
  });

  test("Render password", () => {
    render(<MockLogin onSubmit={jest.fn()} />);

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("Render submit button", () => {
    render(<MockLogin onSubmit={jest.fn()} />);

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});

const testFunction = (state, description, email, password) => {
  test(description, async () => {
    const onSubmit = jest.fn();
    render(<MockLogin onSubmit={onSubmit} />);

    userEvent.type(screen.getByRole("textbox", { name: /email/i }), email);
    userEvent.type(screen.getByLabelText(/password/i), password);

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() =>
      state
        ? expect(onSubmit).toHaveBeenCalled()
        : expect(onSubmit).not.toHaveBeenCalled()
    );
  });
};

let email = "dsflk@gmail.com";
let password = "password";

describe("Check login validation", () => {
  testFunction(
    true,
    "the form should be submitted, if all data are valid",
    email,
    password
  );

  testFunction(
    false,
    "if the email is missing, the form should not be submitted",
    "",
    password
  );

  testFunction(
    false,
    "if the password is missing, the form should not be submitted",
    email,
    ""
  );
});
 
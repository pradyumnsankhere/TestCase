import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { LoginForm } from "./TestCases/LoginFrom";
import Counter from "./TestCases/Counter";

test("renders learn react link", () => {
  render(<LoginForm />);

  const learnReactButton = screen.getByRole("button", { name: "Login" });

  expect(learnReactButton).toBeInTheDocument();
});

test("updates username state on input change", () => {
  render(<LoginForm />);

  const usernameInput = screen.getByTestId(
    "username-input"
  ) as HTMLInputElement;

  usernameInput.value = "testuser";
  fireEvent.input(usernameInput);

  expect(usernameInput).toHaveValue("testuser");
});

test("updates password state on input change", () => {
  render(<LoginForm />);
  const passwordInput = screen.getByTestId(
    "password-input"
  ) as HTMLInputElement;
  passwordInput.value = "testpassword";
  fireEvent.blur(passwordInput);

  expect(passwordInput.value).toBe("testpassword");
});

test("Increment the counter value", () => {
  render(<Counter />);

  const incrementButton = screen.getByText("Increment") as HTMLButtonElement;
  const counterValue = screen.getByTestId("counter-value") as HTMLElement;

  expect(counterValue).toHaveTextContent("Counter: 0");

  fireEvent.click(incrementButton);

  expect(counterValue).toHaveTextContent("Counter: 1");
});

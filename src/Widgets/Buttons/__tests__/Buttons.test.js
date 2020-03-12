import React from "react";
import { render } from "@testing-library/react";
import { Button, PrimaryButton } from "../Buttons";

test("renders a normal button", () => {
  expect(Button).toBeDefined()
  const { getByText } = render(<Button label='Done' />);
  const button = getByText(/Done/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Done');
});

test("renders a primary button", () => {
  const { getByText } = render(<PrimaryButton label='Done' />);
  const button = getByText(/Done/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Done');
});

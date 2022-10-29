import { fireEvent, render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container);
  // finding a button element with text "change to blue"
  const colorbutton = screen.getByRole("button", {
    name: "change to blue",
  });

  //expect the background color to be red
  expect(colorbutton).toHaveStyle({ backgroundColor: "red" });
});

test("button color is changed to blue after clicking", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to blue",
  });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("change to red");
});

test("initialconditions", () => {
  render(<App />);
  //check that button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "change to blue",
  });
  expect(colorButton).toBeEnabled();
  //check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button gets disabled and enabled on checking and unchecking the checkbox", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  const colorButton = screen.getByRole("button", {
    name: "change to blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("turn the button color to gray and wording to white while clicking on checkbox", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  const colorButton = screen.getByRole("button", {
    name: "change to blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray", color: "white" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "red", color: "black" });
});

describe("spaces before camel-case capital letter", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

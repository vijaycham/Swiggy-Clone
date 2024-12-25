
import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("should contain all the test content for contact", ()=> {
it("should render all the headings in the contact Component", () => {
  render(<Contact />);
  const headings = screen.getAllByRole("heading");
  expect(headings.length).toBe(4);
});
it("should load contact us component", () => {
  render(<Contact />);
  expect(
    screen.getByRole("heading", { name: "Name: VIJAY.S" })
  ).toBeInTheDocument();
});
it("should load button inside my contact component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});
it("should load input name inside my contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");
  expect(inputName).toBeInTheDocument();
});
it("should load 2 input name inside my contact component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
});

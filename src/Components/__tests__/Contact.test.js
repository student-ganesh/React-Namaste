import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load a Contact Page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load a button/ Submit word present in Contact Page", () => {
    render(<Contact />);

    const Submit = screen.getByText("Submit");

    //Assertion
    expect(Submit).toBeInTheDocument();
  });

  it("Should load a Placeholder in Contact Page", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load a 2 inputBoxes in Contact Page", () => {
    // Rendering
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});

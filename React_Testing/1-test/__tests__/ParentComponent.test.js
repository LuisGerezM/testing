import { render, screen, fireEvent } from "@testing-library/react";
import ParentComponent from "../src/components/TestingLibraryIntegration/ParentComponent";

describe("<ParentComponent />", () => {
  test("Updates the parent component text when the child component button is clicked", () => {
    render(<ParentComponent />);

    const inputElement = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.change(inputElement, { target: { value: "Hello World" } });
    fireEvent.click(submitButton);

    expect(updatedText).toBeInTheDocument();
  });
});

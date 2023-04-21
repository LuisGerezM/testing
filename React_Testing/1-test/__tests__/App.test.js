import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

describe("Jest", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });

  it("should display element", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /Testing with Jest \+ Testing Library \+ Vite/i })).toBeInTheDocument();
  });
});

describe("<App />", () => {
  test("renders the App component", () => {
    render(<App />);
    const countElement = screen.getByText(/Count:/i);
    const buttonElement = screen.getByText(/Increment/i);
    expect(countElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("Increment the count when the button is clicked", () => {
    render(<App />);
    const buttonElement = screen.getByText(/Increment/i);

    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/Count: 1/i);

    expect(countElement).toBeInTheDocument();
  });
});

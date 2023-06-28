import { render, fireEvent } from "@testing-library/react";
import Counter from "../../src/components/Counter";

describe(Counter, () => {
  test("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialState={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  test("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialState={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);

    fireEvent.click(incrementBtn);
    const countNewValue = Number(getByTestId("count").textContent);
    expect(countNewValue).toEqual(1);
  });

  test("count should decrement by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialState={0} />);
    const decrement = getByRole("button", { name: "Decrement" });

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);

    fireEvent.click(decrement);
    const countNewValue = Number(getByTestId("count").textContent);
    expect(countNewValue).toEqual(-1);
  });

  test("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialState={10} />);
    const restart = getByRole("button", { name: "Restart" });

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(10);

    fireEvent.click(restart);
    const countNewValue = Number(getByTestId("count").textContent);
    expect(countNewValue).toEqual(0);
  });

  test("count should invert sign if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialState={50} />);
    const switchSigns = getByRole("button", { name: "Switch Signs" });

    expect(Number(getByTestId("count").textContent)).toEqual(50);

    fireEvent.click(switchSigns);
    const countNewValue = Number(getByTestId("count").textContent);
    expect(countNewValue).toEqual(-50);
  });
});

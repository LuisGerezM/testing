import { getValue } from "../src/utils/6-primitivos.util";

describe("Testear valores null, undefined y boleanos", () => {
  test("Validar si existe o está definido un valor", () => {
    expect(getValue("definido")).toBeDefined();
  });

  test("Validar si el valor es null", () => {
    expect(getValue()).toBeNull();
  });

  test("Validar si el valor es verdadero", () => {
    expect(getValue("verdadero")).toBeTruthy();
  });

  test("Validar si el valor es falso", () => {
    expect(getValue("falso")).toBeFalsy();
  });

  test("Validar si el valor es NaN", () => {
    expect(getValue("nan")).toBeNaN();
  });
});

import { division, getRandomNum, multiplicacion, resta, suma } from "../src/utils/3-numbers.util";

describe("Probando funciones matemáticas", () => {
  test("Probando suma", () => {
    expect(suma(5, 5)).toBe(10);
  });

  test("Probando resta", () => {
    expect(resta(5, 5)).toBe(0);
  });

  test("Probando multiplicacion", () => {
    expect(multiplicacion(5, 5)).toBe(25);
  });

  test("Probando division", () => {
    expect(division(5, 5)).toBe(1);
  });

  test("Probando funcion getRandomNum", () => {
    expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5);
    expect(getRandomNum(5, 10)).toBeLessThan(5);
    expect(getRandomNum(5, 10)).toBeLessThanOrEqual(5);
  });
});

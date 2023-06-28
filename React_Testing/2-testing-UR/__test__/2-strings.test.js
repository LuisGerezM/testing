import { getId, saluda, despide } from "../src/utils/2-strings.util";

describe("Pruebas de strings", () => {
  const saludo = saluda("Luis");
  const id = getId();
  const despedir = despide();

  test("Probando la funcion saluda", () => {
    expect(saludo).toMatch("Hola soy");
  });

  test("Probando la funcion getId", () => {
    expect(id).toMatch(/\d{2}-\d{3}/);
  });

  test("Probando la funcion saluda", () => {
    expect(despedir).not.toMatch("chau");
  });
});

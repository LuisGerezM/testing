import { createStore } from "../src/utils/4-arrays.util";

describe("Haciendo pruebas a Listas / Arrays", () => {
  test("Probando agregar una nueva fruta al array", () => {
    const store = createStore();
    store.addFruit("fresa");
    expect(store.getFruits()).toStrictEqual(["fresa"]);
  });

  test("Probando agregar dos frutas al array", () => {
    const store = createStore();
    store.addFruit("fresa");
    store.addFruit("melon");
    expect(store.getFruits()).toStrictEqual(["fresa", "melon"]);
  });

  test("Probando si array contiene fruta especifica", () => {
    const store = createStore();
    store.addFruit("pera");
    store.addFruit("fresa");
    store.addFruit("melon");
    expect(store.getFruits()).toContain("pera");
    expect(store.getFruits()).not.toContain("banana");
  });

  test("Probando la longitud del array", () => {
    const store = createStore();
    store.addFruit("pera");
    store.addFruit("fresa");
    store.addFruit("melon");
    expect(store.getFruits()).toHaveLength(3);
  });

  test("Probando agregar un objeto con información de frutas al array", () => {
    const store = createStore();
    store.addFruit({
      name: "manzana",
      price: 100,
    });
    expect(store.getFruits()).toContainEqual({
      name: "manzana",
      price: 100,
    });
  });
});

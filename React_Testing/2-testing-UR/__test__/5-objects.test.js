import { createStore } from "../src/utils/5-objects.util";

describe("Test a Objetos", () => {
  test("Agregar un item en store", () => {
    const store = createStore();
    store.addItem({
      name: "Luis",
      id: 1,
      country: "Arg",
    });
    expect(store.getStore()[0]).toEqual({
      name: "Luis",
      id: 1,
      country: "Arg",
    });
  });

  test("Buscamos un item por id en store", () => {
    const store = createStore();
    store.addItem({
      name: "Luis",
      id: 1,
      country: "Arg",
    });
    expect(store.getById(1)).toEqual({
      name: "Luis",
      id: 1,
      country: "Arg",
    });
    expect(store.getById(1)).toMatchObject({
      name: "Luis",
      country: "Arg",
    });
    expect(store.getById(1)).toHaveProperty("name", "Luis");
  });
});

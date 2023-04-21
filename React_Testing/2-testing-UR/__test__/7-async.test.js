import { getDataCallback, getDataPromise, getDataPromiseError, v } from "../src/utils/7-async.util";

describe("Haciendo test a operaciones asyncronas", () => {
  test("Haciendo test a callback", (done) => {
    getDataCallback((name) => {
      expect(name).toBe("Luis Gerez");
      done();
    });
  });

  test("Haciendo test a promesa", (done) => {
    getDataPromise().then((name) => {
      expect(name).toBe("Luis Gerez");
      done();
    });
  });

  test("Haciendo test a promesa con expect", () => {
    return expect(getDataPromise()).resolves.toBe("Luis Gerez");
  });

  test("Haciendo test a promesa rechazada ", (done) => {
    getDataPromiseError()
      .then((name) => {})
      .catch((error) => {
        expect(error).toBe("Error");
        done();
      });
  });

  test("Haciendo test a promesa rechazada con expect", () => {
    return expect(getDataPromiseError()).rejects.toBe("Error");
  });

  test("Haciendo test a promesa resuelta con async await", async () => {
    const name = await getDataPromise();
    expect(name).toBe("Luis Gerez");
  });

  test("Haciendo test a promesa rechazada con async await", async () => {
    try {
      const name = await getDataPromiseError();
      expect(name).toBe("Luis Gerez");
    } catch (error) {
      expect(error).toBe("Error");
    }
  });

  test("Haciendo test a promesa rechazada con solucitúd HTTP", async () => {
    try {
      const user = await getUsers();
      expect(user).toHavePropertye("username");
      expect(user).toHavePropertye("id");
      expect(user).toHavePropertye("email");
    } catch (error) {}
  });
});

// Callback
const getDataCallback = (callback) => {
  const name = "Luis Gerez";
  setTimeout(() => {
    callback(name);
  }, 350);
};

// Promise
const getDataPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Luis Gerez");
    }, 350);
  });

const getDataPromiseError = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, 350);
  });

// async await
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await res.json();

  return user;
};

export { getDataCallback, getDataPromise, getDataPromiseError, getUsers };

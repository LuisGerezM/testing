const createStore = () => {
  let store = [];
  return {
    addItem: (item) => (store = [...store, item]),
    getStore: () => store,
    getById: (id) => store.filter((item) => item.id === id)[0],
  };
};

export { createStore };

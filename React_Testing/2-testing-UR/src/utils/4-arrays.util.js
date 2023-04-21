const createStore = () => {
  let fruits = [];
  return {
    addFruit: (fruit) => (fruits = [...fruits, fruit]),
    getFruits: () => fruits,
  };
};

export { createStore };

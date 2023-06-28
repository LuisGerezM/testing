const suma = (a, b) => {
  return a + b;
};

const resta = (a, b) => {
  return a - b;
};

const multiplicacion = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { suma, resta, multiplicacion, division, getRandomNum };

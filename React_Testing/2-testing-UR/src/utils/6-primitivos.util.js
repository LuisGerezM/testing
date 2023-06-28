const getValue = (exp) => {
  switch (exp) {
    case "definido":
      return {};
    case "indefinido":
      return undefined;
    case "verdadero":
      return true;
    case "falso":
      return false;
    case "nan":
      return NaN;
    default:
      return null;
  }
};

export { getValue };

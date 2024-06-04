module.exports = {
  printFn: () => {
    return "original implementation";
  },
  add: (a, b) => {
    console.log(`Orginal param ${a}`);
    console.log(`Orginal param ${b}`);
    return a + b;
  },
  divide: (a, b) => {
    return b === 0 ? "b can not be zero" : a / b;
  },
};

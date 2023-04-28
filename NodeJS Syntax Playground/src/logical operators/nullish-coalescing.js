// ?? operator
// The operator returns the value on the left-hand side if it is not null or undefined. However,
// if the value on the left-hand side is null or undefined, it returns the value on the right-hand side.

const calcBoolAndPrint = (a, b) => {
  const or = a || b;
  const and = a && b;
  const nc = a ?? b;
  console.log({ a, b }, { or, and, nc });
};

const fallbackValue = "Default Value";

calcBoolAndPrint(undefined, fallbackValue);
calcBoolAndPrint(null, fallbackValue);
calcBoolAndPrint(false, fallbackValue);
calcBoolAndPrint(true, fallbackValue);
calcBoolAndPrint("Some Value", fallbackValue);

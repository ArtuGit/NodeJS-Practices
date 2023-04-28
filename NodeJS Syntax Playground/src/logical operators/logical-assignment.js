// There are three Logical Assignment Operators: &&=, ||=, and ??=, which are shorthand for combining
// the logical AND (&&), logical OR (||), and Nullish Coalescing (??) operators
// with the assignment operator (=), respectively.

const calcBoolAndPrint = (a, b) => {
  let or = a;
  let and = a;
  let nc = a;

  or ||= b;
  and &&= b;
  nc ??= b;

  const or2 = or || b;
  const and2 = and && b;
  const nc2 = nc ?? b;

  console.log(
    { a, b },
    { or: { or, or2 }, and: { and, and2 }, nc: { nc, nc2 } }
  );
};

const fallbackValue = "Default Value";

calcBoolAndPrint(undefined, fallbackValue);
calcBoolAndPrint(null, fallbackValue);
calcBoolAndPrint(false, fallbackValue);
calcBoolAndPrint(true, fallbackValue);
calcBoolAndPrint("Some Value", fallbackValue);

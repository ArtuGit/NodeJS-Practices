// Currying the add function
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using the curried function
console.log(curryAdd(1)(2)(3)); // Output: 6

// --
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);

console.log(curriedSum(10)(20)); // 30

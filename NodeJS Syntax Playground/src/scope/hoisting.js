function example() {
  console.log(x); // Output: undefined
  var x = 10;
  console.log(x); // Output: 10
}

example();

function example2() {
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization
  console.log(y); // Output: undefined
  const x = 10;
  console.log(x); // Output: 10
}

example2();

y = 20;
let y;
console.log(y); // Output: 20

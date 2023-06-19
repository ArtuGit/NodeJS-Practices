const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

const array = [1, 2, 3, 4, 5];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

const getMax = (a, b) => {
  console.log(`a: ${a}, b: ${b}`);
  return Math.max(a, b);
};

// callback is invoked for each element in the array starting at index 0
const a = [1, 100, 200, 300].reduce(getMax); // 100
console.log({ a });

const a1 = [50].reduce(getMax); // 50
console.log({ a1 });

// callback is invoked once for element at index 1
const a2 = [1, 100].reduce(getMax); // 100
console.log({ a2 });

// callback is not invoked
const a3 = [50].reduce(getMax); // 50
console.log({ a3 });
const a4 = [].reduce(getMax, 1); // 1
console.log({ a4 });

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);

console.log(sum); // 6

const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
const b1 = multiply6(10); // 60
const b2 = multiply9(10); // 90
const b3 = multiply16(10); // 160
const b4 = multiply24(10); // 240
console.log({ b1, b2, b3, b4 });

// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

const asyncPipe2 =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);

// Building blocks to use for composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// The composed functions can also return non-promises, because the values are
// all eventually wrapped in promises
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200
asyncPipe2(p1, p2, f3, p4)(10).then(console.log); // 1200

console.log([1, 2, , 4, "5"].reduce((a, b) => a + b)); // 75
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = Object.hasOwn(allNames, name) ? allNames[name] : 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});

console.log(countedNames);

const names2 = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames2 = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  allNames[name] = currCount + 1;
  console.log({ allNames, name, currCount });
  // return allNames, otherwise the next iteration receives undefined
  return allNames;
}, Object.create(null));
console.log(countedNames2);


const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"] },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];
const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);
console.log(allBooks); // [ 'Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining' ]

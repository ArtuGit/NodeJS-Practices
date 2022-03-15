function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator); // [object Generator]
let one = generator.next();
console.log(JSON.stringify(one))
let two = generator.next();
console.log(JSON.stringify(two)); // {value: 2, done: false}
let three = generator.next();
console.log(JSON.stringify(three)); // {value: 3, done: true}

let generator2 = generateSequence();
for(let value of generator2) {
  console.log(value); // 1, then 2
}

let sequence = [0, ...generateSequence()];
console.log(sequence); // 0, 1, 2

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
const generator = generateSequence();
console.log(generator); // [object Generator]
const one = generator.next();
console.log(JSON.stringify(one));
const two = generator.next();
console.log(JSON.stringify(two)); // {value: 2, done: false}
const three = generator.next();
console.log(JSON.stringify(three)); // {value: 3, done: true}

const generator2 = generateSequence();
for (const value of generator2) {
  console.log(value); // 1, then 2
}

const sequence = [0, ...generateSequence()];
console.log(sequence); // 0, 1, 2

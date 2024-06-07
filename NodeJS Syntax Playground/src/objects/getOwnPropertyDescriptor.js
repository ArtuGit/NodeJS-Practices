const person = {
  name: "Alice",
  age: 30,
};

const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
/*
Output:
{
  value: 'Alice',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

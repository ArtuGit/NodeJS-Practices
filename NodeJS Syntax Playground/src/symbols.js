const idSymbol = Symbol("id");

const person = {
  name: "John Smith",
  age: 42,
  [Symbol("id")]: 12345,
};

console.log(person.name); // 'John Smith'
console.log(person[Symbol("id")]); // undefined

const person2 = {
  name: "John Smith",
  age: 42,
  [idSymbol]: 12345,
};

console.log(idSymbol); // Symbol(id)
console.log(person[idSymbol]); // undefined
console.log(person2[idSymbol]); // 12345

const idSymbol2 = Symbol({ id: "00001", value: "company_id" });
console.log(idSymbol2); // Symbol([object Object])

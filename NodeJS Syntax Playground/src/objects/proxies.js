const target = {
  name: "Alice",
  age: 30,
};

const handler = {
  get(target, property) {
    console.log(`Accessing property: ${property}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting property: ${property} = ${value}`);
    target[property] = value;
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Accessing property: name; Output: Alice
proxy.age = 31; // Setting property: age = 31
console.log(proxy.age); // Accessing property: age; Output: 31

console.log(proxy); // { name: 'Alice', age: 31 }

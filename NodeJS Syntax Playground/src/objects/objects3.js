const object1 = {
  property1: 1,
  method1: function () {
    console.log("Method");
  },
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");
const descriptor2 = Object.getOwnPropertyDescriptor(object1, "method1");
console.log(descriptor1);
console.log(descriptor2);

Object.defineProperty(object1, "property2", {
  value: 2,
  enumerable: true,
  configurable: true,
  writable: true,
});

console.log(object1);

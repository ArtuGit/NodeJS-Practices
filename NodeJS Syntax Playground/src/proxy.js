/* The Proxy object allows you to create an object that can be used in place of the original object,
but which may redefine fundamental Object operations like getting, setting, and defining properties.
Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on. */

const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};
const proxy1 = new Proxy(target, handler1);
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};
const proxy2 = new Proxy(target, handler2);
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world

const handler3 = {
  message2: "everyone2",
};
const proxy3 = new Proxy(target, handler3);
console.log(proxy3.message1); // world
console.log(proxy3.message2); // everyone (not for properties)

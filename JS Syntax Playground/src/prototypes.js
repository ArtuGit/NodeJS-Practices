import util from 'util'

const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  }
}

myObject.greet(); // Greetings from Madrid
console.log(myObject.toString()); // "[object Object]"

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);


const myDate2 = new Date(1995, 11, 17);
console.log(myDate2.getYear()); // 95
myDate2.getYear = function() {
  console.log('something else!')
};
console.log(myDate2.getYear()); // 'something else!'

const personPrototype = {
  greet() {
    console.log('hello!');
  }
}
const carl = Object.create(personPrototype);
carl.greet();  // hello!

const personPrototype2 = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  }
}
function Person(name) {
  this.name = name;
}
Person.prototype = personPrototype2;
Person.prototype.constructor = Person;
const reuben = new Person('Reuben');
reuben.greet(); // hello, my name is Reuben!

const irma = new Person('Irma');
console.log(irma)
console.log(irma.hasOwnProperty('name')) //true
console.log(irma.hasOwnProperty('greet')) //false
console.log(Object.getPrototypeOf(irma)) //{ greet: [Function: greet], constructor: [Function: Person] }

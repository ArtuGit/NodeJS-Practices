class Greeter {   
  constructor(message) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}
   
let greeter = new Greeter("world");
console.log(greeter.greet())


class Rectangle {
  height = 0;
  width;
  #privateField = 'Private field'
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
  getPrivateField() {
      return this.#privateField
  }
}

const box = new Rectangle(10,10)
console.log('privateField:', box.getPrivateField())
console.log('height:', box.height)
//console.log('privateField:', box.#privateField)

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    super.speak();
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
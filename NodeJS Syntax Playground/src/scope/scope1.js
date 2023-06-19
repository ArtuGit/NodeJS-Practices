// The call() method is a built-in function of the Function
// object that allows you to call a function with a specific this context
// and arguments provided individually. The call() method invokes the function
// immediately and allows you to set the value of this explicitly.

const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const anotherPerson = {
  name: "Bob",
};

person.greet.call(anotherPerson);
// Output: Hello, Bob!

// The apply() method is similar to call(), but it accepts arguments as an array
// or an array-like object instead of individual arguments. The first argument
// is the this context, and the second argument is an array-like object
// containing the arguments to be passed to the function.

const numbers = [10, 2, 3];
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // Output: 10

// The bind() method returns a new function with a bound this context and,
// optionally, pre-filled arguments. It allows you to create a function
// with a fixed context that can be called later.

const boundGreet = person.greet.bind(person);
boundGreet(); // Output: Hello, Alice!

// Arrow functions: Arrow functions have a lexical this binding, meaning they
// inherit the this value from their surrounding scope.
// They do not have their own this value.

const person2 = {
  name: "Alice",
  greet: function () {
    const sayHello = () => {
      console.log(`Hello, ${this.name}!`);
      console.log(this);
    };

    sayHello();
  },
};

person2.greet(); // Output: Hello, Alice!

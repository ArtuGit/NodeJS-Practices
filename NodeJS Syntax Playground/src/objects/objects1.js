var foo = { 'alpha' : 'puffin', 'beta' : 'beagle' };
var keys = [];
for (var key in foo) {
  keys.push(key);
}
console.log(keys)

// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']
console.log(Object.values(anObj)); // console: [ 'b', 'c', 'a' ]
console.log(Object.entries(anObj)); // console: [ [ '2', 'b' ], [ '7', 'c' ], [ '100', 'a' ] ]

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
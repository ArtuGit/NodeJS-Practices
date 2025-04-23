
const set = new Set();

const john = { name: "John" };
const pete = { name: "Pete" };
const mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (const user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

const set2 = new Set(["oranges", "apples", "bananas"]);
for (const value of set2) console.log(value);
// the same with forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});

const ws = new WeakSet();
const foo = { a: "a" };
const bar = {};
ws.add(foo);
ws.add(bar);
ws.add(bar);
ws.has(foo); // true
ws.has(bar); // true
console.log(ws);
ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
console.log(ws);

/* Use case: Detecting circular references
Functions that call themselves recursively need a way of guarding against circular data structures by tracking which objects have already been processed. */

// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = null) {
  if (!_refs) _refs = new WeakSet();
  // Avoid infinite recursion
  if (_refs.has(subject)) return;
  fn(subject);
  if (typeof subject === "object") {
    _refs.add(subject);
    for (const key in subject) execRecursively(fn, subject[key], _refs);
  }
}

const foo2 = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};
foo.bar = foo2;
foo.bar.baz = foo2; // Circular reference!
execRecursively((obj) => console.log(obj), foo2);

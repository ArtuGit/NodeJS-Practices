const map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'
console.log(map.get(true)); // 'bool1'

console.log(map.size); // 3

const map2 = new Map();
map2.set("2", "str2");
map2.set("2", "str2");
console.log(map2); // Map(1) { '2' => 'str2' }
console.log(map2.size); // 1

const map3 = new Map();
map3.set({ a: "a", b: "b" }, false);
map3.set({ a: "a", b: "b" }, false);
console.log(map3); //  Map(2) { { a: 'a', b: 'b' } => false, { a: 'a', b: 'b' } => false }
console.log(map3.size); // 2

const map4 = new Map();
map4.set(JSON.stringify({ a: "a", b: "b" }), false);
map4.set(JSON.stringify({ a: "a", b: "b" }), false);
console.log(map4); //  Map(1) { '{"a":"a","b":"b"}' => false }
console.log(map4.size); // 1

const john = { name: "John" };
// for every user, let's store their visits count
const visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john)); // 123

const recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
// iterate over keys (vegetables)
for (const vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (const amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (const entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = {
  a: "1",
  b: "2",
  c: "3",
};
wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!
wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no key for o2 on wm2
wm2.get(o3); // undefined, because that is the set value
wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')
wm3.set(o1, 37);
wm3.get(o1); // 37
wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false

// Implementing a WeakMap-like class with a .clear() method
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }

  clear() {
    this._wm = new WeakMap();
  }

  delete(k) {
    return this._wm.delete(k);
  }

  get(k) {
    return this._wm.get(k);
  }

  has(k) {
    return this._wm.has(k);
  }

  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}

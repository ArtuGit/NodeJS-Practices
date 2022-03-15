/* Chaining */

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  console.log(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;

});

/* Returning promises */

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  console.log(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  console.log(result); // 4

});

/* Several handlers to one promise */

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise2.then(function(result) {
  console.log(result); // 1
  return result * 2;
});

promise2.then(function(result) {
  console.log(result); // 1
  return result * 2;
});

promise2.then(function(result) {
  console.log(result); // 1
  return result * 2;
});
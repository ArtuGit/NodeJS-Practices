/* Chaining */

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    console.log("promise1: 1st", result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    console.log("promise1: 2nd", result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log("promise1: 3rd", result); // 4
    return result * 2;
  });

/* Returning promises */

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 2000);
})
  .then(function (result) {
    console.log("promise2: 1st", result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log("promise2: 2nd", result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log("promise2: 3rd", result); // 4
  });

/* Several handlers to one promise */

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise3.then(function (result) {
  console.log("promise3: 1st", result); // 1
  return result * 2;
});

promise3.then(function (result) {
  console.log("promise3: 2nd", result); // 1
  return result * 2;
});

promise3.then(function (result) {
  console.log("promise3: 3rd", result); // 1
  return result * 2;
});

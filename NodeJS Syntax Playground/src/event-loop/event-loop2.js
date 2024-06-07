const makePromise = () =>
  new Promise((resolve, reject) => {
    const success = true; // This would be the result of an async operation
    if (success) {
      console.log("Promise sync code");
      setTimeout(() => {
        console.log("Promise result code");
        resolve("Operation successful!");
      }, 100);
    } else {
      console.log("Fail!");
      reject("Operation failed.");
    }
  });

console.log("Begin");
makePromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  makePromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });  
console.log("End");

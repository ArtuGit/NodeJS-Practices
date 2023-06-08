// Error handling

const createAndRunPromise = (shouldResolve, throwError = false) => {
  return new Promise((resolve, reject) => {
    if (throwError) {
      throw new Error("Error thrown");
    }
    if (shouldResolve) {
      resolve("ok");
    } else {
      reject("error");
    }
  })
    .then((result) => {
      console.log("Promise resolved with result: ", result);
    })
    .catch((err) => {
      console.log("Error has been caught: ", err);
    });
};

createAndRunPromise(true);
createAndRunPromise(false);
createAndRunPromise(true, true);

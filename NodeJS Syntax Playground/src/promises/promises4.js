// Error handling

const createPromise = async (shouldResolve, throwError = false) => {
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
      return result;
    })
    .catch((err) => {
      console.log("Error has been caught: ", err);
    });
};

const main = async () => {
  await createPromise(true);
  await createPromise(false);
  await createPromise(true, true);
};

main();

function fakeRequest(url, isResolved) {
  const delay = 100;
  setTimeout(() => {
    console.log(`Requested ${url} ...`);
  }, delay);
  return isResolved;
}

const fakeRequestPromise = (url, throwError = false, isResolved= true) => {
  return new Promise((resolve, reject) => {
    if (throwError) {
      throw new Error('Tech failure!')
    }
    let result = fakeRequest(url, isResolved);
    if (!result)
      reject(`Connection Timeout for ${url}" :(`);
    else
      resolve(`Here is your fake data from "${url}".`);
  })
}

const request = fakeRequestPromise('api/callback0', true)
  .catch((err) => {
    console.log("Tech error is caught!");
    console.log(err);
  });

const request1 = fakeRequestPromise('api/callback1')
  .then((data) => {
    console.log("Success (callback1)!");
    console.log("Data:",data);
  })
  .catch((err) => {
    console.log("Tech error is caught!");
    console.log(err);
  });

// const twoRequests = fakeRequestPromise('api/callback1')
//   .then((data) => {
//     console.log("Success (callback1)!");
//     console.log("Data:",data);
//     return fakeRequestPromise('api/callback2', false, false);
//   })
//   .catch((err) => {
//     console.log("Why?!");
//     console.log(err);
//   })
//   .then((data) => {
//     console.log("Success (callback2)!");
//     console.log("Data:",data);
//   })
//   .catch((err) => {
//     console.log("Rejected!");
//     console.log(err);
//   })
//

// const twoRequests2 = fakeRequestPromise('api/callback3', false, true)
//   .then((data) => {
//     console.log("Success (callback3)!");
//     console.log(data);
//     return fakeRequestPromise('api/callback4', false, false);
//   })
//   .then((data) => {
//     console.log("Success (callback4)!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Common caught: Rejected!");
//     console.log(err);
//   })

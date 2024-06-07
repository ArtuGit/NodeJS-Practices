try {
  // The synchronous code that
  // we want to catch thrown
  // errors on
  const err = new Error("Hello");
  throw err;
} catch (err) {
  // Handle the error safely
  console.log(err);
}

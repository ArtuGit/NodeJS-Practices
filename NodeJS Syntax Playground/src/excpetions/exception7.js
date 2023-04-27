try {
  setTimeout(function () {
    const err = new Error("Hello");
    throw err;
  }, 1000);
} catch (err) {
  console.log("Uncaught!");
  // Example error won't be caught
  // here... crashing our application
  // hence the need for domains
}

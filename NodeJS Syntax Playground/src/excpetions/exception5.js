process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); // mandatory (as per the Node.js docs)
});

try {
  throw new Error("Catch me if you can!");
} catch (err) {
  console.error("Gotcha:", err);
}

const { Worker } = require("worker_threads");

const number = 33;

const worker = new Worker("./myWorker.js", { workerData: { num: number } });

for (let i = 33; i < 45; i++) {
  // Do some random work
}
worker.once("message", (result) => {
  console.log(`${number} the Fibonacci No: ${result}`);
});

worker.on("error", (error) => {
  console.log(error);
});

worker.on("exit", (exitCode) => {
  console.log(`It exited with code ${exitCode}`);
});

console.log("Execution in main thread");

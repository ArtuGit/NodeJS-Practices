const makeStep = (step) => {
  console.log(`Step: ${step}`);
};

const main = () => {
  makeStep("initial");

  setImmediate(() => {
    makeStep("setImmediate");
  });
  setTimeout(() => {
    makeStep("setTimeout");
  }, 0);
  process.nextTick(() => {
    makeStep("nextTick");
  });

  new Promise((resolve, reject) => {
    makeStep("promise 1 executor");
    resolve();
  })
    .then(() => {
      makeStep("promise 1 after resolve 1");
    })
    .then(() => {
      makeStep("promise 1 after resolve 2");
    });

  new Promise((resolve, reject) => {
    makeStep("promise 2 executor");
    setTimeout(() => {
      makeStep("promise 2 before resolve");
      resolve("Success!");
    }, 250);
  }).then(() => {
    makeStep("promise 2 after resolve");
  });
};

main();

for (let i = 0; i <= 10; i++) {
  makeStep("sync iteration " + i);
}
makeStep("last sync");

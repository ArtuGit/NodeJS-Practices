const makeStep = (step) => {
  console.log(`Step: ${step}`);
};

const iterate = (name, count) => {
  for (let i = 0; i <= count; i++) {
    console.log(`${name}: ${i}`);
  }
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
    iterate("promise 1 executor", 3);
    resolve();
  })
    .then(() => {
      makeStep("promise 1 after resolve 1");
    })
    .then(() => {
      makeStep("promise 1 after resolve 2");
    });

  const p2 = new Promise((resolve, reject) => {
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

iterate("sync iteration", 10);
makeStep("last sync");

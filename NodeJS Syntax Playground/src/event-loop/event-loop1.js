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
  for (let i = 0; i <= 10; i++) {
    makeStep("sync iteration " + i);
  }
  makeStep("last sync");
};

main();

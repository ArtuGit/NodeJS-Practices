import { createReadStream } from "fs";

let chunkIndex = 0;
const readStream = createReadStream("./data.txt");

readStream.on("open", () => {
  console.log("Started Reading...");
});

readStream.on("end", () => {
  console.log("Completed Reading...");
});

readStream.on("data", (chunk) => {
  console.log("Chunk: " + ++chunkIndex);
  console.log("-----------------------------------------");
  console.log(chunk);
  console.log("\n");
});

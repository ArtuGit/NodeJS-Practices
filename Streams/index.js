import got from "got";
import {createWriteStream} from "fs";
import stream from "stream";
import {promisify} from "util";

const pipeline = promisify(stream.pipeline);

const url = "https://media0.giphy.com/media/4SS0kfzRqfBf2/giphy.gif";
const fileName = "image.gif";

const downloadStream = got.stream(url);
const fileWriterStream = createWriteStream(fileName);

downloadStream.on("downloadProgress", ({transferred, total, percent}) => {
  const percentage = Math.round(percent * 100);
  console.error(`progress: ${transferred}/${total} (${percentage}%)`);
});

pipeline(downloadStream, fileWriterStream)
  .then(() => console.log(`File downloaded to ${fileName}`))
  .catch((error) => console.error(`Something went wrong. ${error.message}`));
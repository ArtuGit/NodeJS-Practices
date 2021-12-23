const fs = require('fs');
const ytdl = require('ytdl-core');

console.log('Starting to download...')
ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
  .pipe(
    fs.createWriteStream('video.mp4')
      .on('finish', function () {
        console.log('File downloaded');
      })
  );
import process, { platform, ppid, chdir, cwd } from "process";

console.log(`Starting directory: ${cwd()}`);
try {
  chdir("/tmp");
  console.log(`New directory: ${cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

console.log(`The parent process is pid ${ppid}`);
console.log(`This platform is ${platform}`);
console.log("process:", process);

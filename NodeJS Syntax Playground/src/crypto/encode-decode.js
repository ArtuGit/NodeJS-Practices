const str = "CODED STRING";
const strUtf8 = "CODED STRING, Кідс Стрінг";
const encodedStr = btoa(str);
const encodedStrUtf8 = Buffer.from(strUtf8).toString('base64');

console.log(encodedStr); // Q09ERUQgU1RSSU5H
console.log(encodedStrUtf8); // Q09ERUQgU1RSSU5HLCDQmtGW0LTRgSDQodGC0YDRltC90LM=

const base64Str = "Q09ERUQgU1RSSU5H";
const base64StrUtf8 = "Q09ERUQgU1RSSU5HLCDQmtGW0LTRgSDQodGC0YDRltC90LM=";
const decodedStr = atob(base64Str);
const decodedStrUtf8 = Buffer.from(base64StrUtf8, 'base64').toString('utf-8');

console.log(decodedStr);
console.log(decodedStrUtf8);
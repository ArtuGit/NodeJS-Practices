const fs = require('fs');
const vm = require('vm');

global.fs = fs;
global.__dirname = __dirname;

const app1 = fs.readFileSync(__dirname + '/' + 'vm2-source1.js');
vm.runInThisContext(app1);
const app2 = fs.readFileSync(__dirname + '/' + 'vm2-source2.js');

const contextObject = { count: 0 }; // Context Object
vm.createContext(contextObject); // Create Context
vm.runInContext(app2, contextObject);
console.log(contextObject)



const vm = require('Core Modules/vm/vm');  // VM Instance

const contextObject = { count: 0 }; // Context Object

vm.createContext(contextObject); // Create Context

const code = 'count += 1;'; // Code to be Executed in the Context

vm.runInContext(code, contextObject); // Run the code in the Context of contextObject

console.log(contextObject); // Print the updated value

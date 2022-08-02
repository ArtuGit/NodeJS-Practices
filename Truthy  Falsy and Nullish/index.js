const truthy_values = [
  false,
  0,
  ``,
  '',
  "",
  null,
  undefined,
  NaN,
  '0',
  'false',
  [],
  {},
  function() {}
].filter(Boolean);

// Filter out falsy values and log remaining truthy values
console.log('truthy_values',truthy_values);

// Logical AND (&&)
let result
result = undefined && 'foo';  
console.log('1:',result)
result = 2 && 0;
console.log('2:',result)
result = 'foo:' && 4;
console.log('3:',result)
result = 'foo' && 4 && 5;
console.log('4:',result)
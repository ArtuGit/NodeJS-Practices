const truthy_values = [
  false,
  0,
  ``,
  "",
  "",
  null,
  undefined,
  NaN,
  "0",
  "false",
  [],
  {},
  function () {},
].filter(Boolean);

// Filter out falsy values and log remaining truthy values
console.log("truthy_values", truthy_values);

let result;

// Logical AND (&&)

result = undefined && "foo";
console.log("1.1:", result, Boolean(result));
result = null && "foo";
console.log("1.2:", result, Boolean(result));
result = 0 && "foo";
console.log("1.3:", result, Boolean(result));
result = 2 && 0;
console.log("2:", result, Boolean(result));
result = "foo" && 4;
console.log("3:", result, Boolean(result));
result = "foo" && 4 && 5;
console.log("4:", result, Boolean(result));
result = "foo" && undefined && null && 0 && 4 && 5;
console.log("4.1:", result, Boolean(result));
result = "foo" &&  0 && null && 5;
console.log("4.2:", result, Boolean(result));


// Logical OR (||)

result = undefined || "foo";
console.log("5.1:", result, Boolean(result));
result = null || "foo";
console.log("5.2:", result, Boolean(result));
result = 0 || "foo";
console.log("5.3:", result, Boolean(result));
result = 2 || 0;
console.log("6:", result, Boolean(result));
result = "foo" || 4;
console.log("7:", result, Boolean(result));
result = "foo" || 4 || 5;
console.log("8:", result, Boolean(result));


const obj = {
  nulled: null,
};

console.log("9:", obj.nondef);
console.log("10:", obj.nulled);

// console.log('11:',nondef) // ReferenceError: nondef is not defined
// console.log('12:',obj2.prop) // ReferenceError: obj2 is not defined

if (typeof obj3 !== "undefined") {
  console.log("13:", obj3?.nondef);
  console.log("14:", obj3?.nulled);
}



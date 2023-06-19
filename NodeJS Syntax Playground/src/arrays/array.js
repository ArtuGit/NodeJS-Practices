const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log("1. ", doubledNumbers);

const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = nestedArray.flat();
console.log("2. ", flattenedArray); // [1, 2, [3, [4]]]

const deeplyNestedArray = [1, [2, [3, [4]]]];
const deeplyFlattenedArray = deeplyNestedArray.flat(Infinity);
console.log("3. ", deeplyFlattenedArray); // [1, 2, 3, 4]

const deeplyMappedAndFlattenedArray2 = nestedArray.flatMap((num) => [
  [num * 2],
]);
console.log("4. ", deeplyMappedAndFlattenedArray2);

const deeplyFlattenedArray2 = deeplyMappedAndFlattenedArray2.flat();
console.log("5. ", deeplyFlattenedArray2);

const range = Array(10)
  .fill(0)
  .map((_, index) => index);
console.log("6. ", range); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const range2 = [...Array(10).keys()];
console.log("7. ", range2); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

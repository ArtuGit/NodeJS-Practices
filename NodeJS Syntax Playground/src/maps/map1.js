const originalMap = new Map();
originalMap.set("key1", "value1");
originalMap.set("key2", "value2");
originalMap.set("key3", "value3");
originalMap.set("key4", "value4");

const filteredMap = new Map(
  [...originalMap].filter(([key, value]) => {
    // Filtering condition
    return key.startsWith("key");
  })
);

console.log(filteredMap);

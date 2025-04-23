const arr = [1,2,3,4,5,6,7]

const res = arr.reduce(
  (acc, el)=> acc['el'+el] = el,
  {}
)

console.log(res)

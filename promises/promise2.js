const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]


const promise2Wrong = Promise.reject('Something is wrong');
Promise.all([promise1, promise2Wrong, promise3]).then((values) => {
  console.log(values);
})
  .catch(err => {
    console.error(err)
  })
// expected output: Something is wrong

const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise4, promise5];

Promise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"

const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'second')
})

Promise.race([first, second]).then(result => {
  console.log(result) // second
})
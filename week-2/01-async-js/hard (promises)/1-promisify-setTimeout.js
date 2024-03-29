/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${n} seconds`);
    }, n * 1000);
  });
}

let input = 10;

wait(input)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

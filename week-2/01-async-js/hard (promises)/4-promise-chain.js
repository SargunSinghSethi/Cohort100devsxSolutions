/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function waitOneSecond() {
  return new Promise((resolve) => resolve("promise 1 fulfilled"), 1000);
}

function waitTwoSecond() {
  return new Promise((resolve) => resolve("promise 2 fulfilled"), 2000);
}

function waitThreeSecond() {
  return new Promise((resolve) => resolve("promise 3 fulfilled"), 3000);
}

async function calculateTime() {
  const start = new Date().getTime();
  await waitOneSecond().then((result) => {
    console.log(result);
  });
  await waitTwoSecond().then((result) => {
    console.log(result);
  });
  await waitThreeSecond().then((result) => {
    console.log(result);
  });

  const end = new Date().getTime();
  const elapsed = (end - start) / 1000;
  console.log(`Total Time Taken: ${elapsed}`);
}

calculateTime();

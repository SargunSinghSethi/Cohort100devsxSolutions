/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) =>
    setTimeout(resolve("promise 1 fulfilled"), 1000)
  );
}

function waitTwoSecond() {
  return new Promise((resolve) =>
    setTimeout(resolve("promise 2 fulfilled"), 2000)
  );
}

function waitThreeSecond() {
  return new Promise((resolve) =>
    setTimeout(resolve("promise 3 fulfilled"), 3000)
  );
}

async function calculateTime() {
  const start = new Date().getTime();
  await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((result) => {
      console.log(`All promises resolved ${result}`);
    })
    .catch((err) => {
      console.error("Hello error");
    });

  const end = new Date().getTime();
  const elapsed = (end - start) / 1000;
  console.log(`Total Time Taken: ${elapsed}`);
}
calculateTime();

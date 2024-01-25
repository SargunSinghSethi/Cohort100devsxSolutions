let count = 0;
const currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();
function inc() {
  currentSeconds++;
  if (currentSeconds === 60) {
    currentSeconds = 0;
    currentMinutes++;
  }
  if (currentMinutes === 60) {
    currentMinutes = 0;
    currentHour++;
  }
  if (currentHour === 24) {
    currentHour = 0;
  }

  if (currentHour >= 12) {
    console.log(`${currentHour}:${currentMinutes}:${currentSeconds} PM`);
  } else {
    console.log(`${currentHour}:${currentMinutes}:${currentSeconds} AM`);
  }
  setTimeout(inc, 1000);
}

inc();

const secondsDisplay = document.querySelector(".seconds");
const tensDisplay = document.querySelector(".tens");

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", startWatch);
stopButton.addEventListener("click", stopWatch);
resetButton.addEventListener("click", resetWatch);

let tens = 00;
let seconds = 00;

let interval;

function stopWatch() {
  clearInterval(interval);
}

function resetWatch() {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  tensDisplay.innerHTML = tens;
  secondsDisplay.innerHTML = seconds;
}

function startWatch() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

function startTimer() {
  tens++;
  if (tens <= 9) {
    tensDisplay.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    tensDisplay.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    secondsDisplay.innerHTML = "0" + seconds;
    tens = 0;
    tensDisplay.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    secondsDisplay = seconds;
  }
}

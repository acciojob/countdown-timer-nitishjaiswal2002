// Your script here.
const timer = document.querySelector('.timer');
const userInput = document.getElementById('userInput');
const countDownDisplay = document.getElementById('countDown');
const endTimeDisplay = document.getElementById('endTime');
const startButton = document.querySelector('button');

let countdown;

function startTimer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  countDownDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  endTimeDisplay.textContent = `End Time: ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startCustomTimer(e) {
  e.preventDefault();
  const minutes = parseInt(userInput.value);
  startTimer(minutes * 60);
}

startButton.addEventListener('click', startCustomTimer);
userInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    startCustomTimer(e);
  }
});
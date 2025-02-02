let timerElement = document.getElementById('timer');
let totalSeconds = 0;
let intervalId = null;

// Форматування часу у вигляді hh:mm:ss
function formatTime(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
}

function updateTimer() {
  timerElement.textContent = `Time on page: ${formatTime(totalSeconds)}`;
}

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      totalSeconds++;
      updateTimer();
    }, 1000);
  }
}
function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    startTimer();
  } else {
    stopTimer();
  }
});

updateTimer();
startTimer();

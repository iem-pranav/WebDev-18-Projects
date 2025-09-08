const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros if less than 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  hrs.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
}

// Update clock immediately then every second
updateClock();
setInterval(updateClock, 1000);

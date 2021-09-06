let timerId;

function countdownTimer() {
  let diff, days, hours, minutes, seconds;
  let hour = 24, min = 60, sec = 60, msec = 1000;
  let oneDayMs = msec * sec * min * hour;
  let oneHourMs = msec * sec * min;
  let oneMinutesMs = msec * sec;

  let currentDate = new Date();
  let endDate = new Date(new Date().getFullYear() + 1, 0, 1);

  diff = endDate.getTime() - currentDate.getTime();
  days = Math.trunc(diff / oneDayMs);
  diff = diff - (days * oneDayMs);
  hours = Math.trunc(diff / oneHourMs);
  diff = diff - (hours * oneHourMs);
  minutes = Math.trunc(diff / oneMinutesMs);
  diff = diff - (minutes * oneMinutesMs);
  seconds = Math.trunc(diff / msec);

  let divDays = document.getElementById('days');
  let divHours = document.getElementById('hours');
  let divMinutes = document.getElementById('minutes');
  let divSeconds = document.getElementById('seconds');

  divDays.innerHTML = days;
  divHours.innerHTML = hours;
  divMinutes.innerHTML = checkMinutes(minutes);
  divSeconds.innerHTML = checkSeconds(seconds);
}

let checkMinutes = minutes => minutes < 10 ? `0${minutes}` : minutes;
let checkSeconds = seconds => seconds < 10 ? `0${seconds}` : seconds;

timerId = setInterval(countdownTimer, 1000);
countdownTimer();
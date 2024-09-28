const start = document
  .getElementById("start")
  .addEventListener("click", timestart);
let time = 0;
let minute = 0;
let hour = 0;
let Interval;

function timestart() {
  if (!Interval) {
    Interval = setInterval(() => {
      time++;
      const second = document.getElementById("second");
      const minutes = document.getElementById("minutes");
      const hours = document.getElementById("hours");

      if (time < 10) {
        second.innerText = `0${time}`;
      } else {
        second.innerText = time;
      }

      if (time >= 60) {
        time = 0;
        minute++;
        if (minute < 10) {
          minutes.innerText = `0${minute}`;
        } else {
          minutes.innerText = minute;
        }

        if (minute >= 60) {
          minute = 0;
          hour++;
          if (hour < 10) {
            hours.innerText = `0${hour}`;
          } else {
            hours.innerText = hour;
          }
        }
      }
    }, 1000);
  }
}

const stop = document
  .getElementById("stop")
  .addEventListener("click", stoptime);

function stoptime() {
  console.log("Stopping the timer");
  clearInterval(Interval);
  Interval = null;
}

const reset = document.getElementById("reset");
reset.addEventListener("click", resetfun);
function resetfun() {
  time = 0;
  minute = 0;
  hour = 0;
  Interval;
  stoptime();
  document.getElementById("second").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("hours").innerText = "00";
}

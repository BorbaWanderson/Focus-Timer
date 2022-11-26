import Sound from "./sounds.js";

// controls
const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const volumeUp = document.querySelector(".vol-up");
const volumeDown = document.querySelector(".vol-down");

// music ambient
const natureOn = document.querySelector(".nature-on");
const NatureOff = document.querySelector(".nature-off");
const rainOn = document.querySelector(".rain-on");
const rainOff = document.querySelector(".rain-off");
const coffeOn = document.querySelector(".coffe-on");
const coffeOff = document.querySelector(".coffe-off");
const fireOn = document.querySelector(".fire-on");
const fireOff = document.querySelector(".fire-off");
const sound = Sound();

// timer
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let timeOut;
let minutes;
let num = 0;

// functions
function countdonw() {
  timeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    secondsDisplay.textContent = "00";
    if (minutes <= 0) {
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
    countdonw();
  }, 1000);
}

play.addEventListener("click", () => {
  countdonw();
});

stop.addEventListener("click", () => {
  clearTimeout(timeOut);
});

NatureOff.addEventListener("click", () => {
  NatureOff.classList.add("hide");
  natureOn.classList.remove("hide");
  sound.nature.play();
});

natureOn.addEventListener("click", () => {
  NatureOff.classList.remove("hide");
  natureOn.classList.add("hide");
  sound.nature.pause();
});

rainOn.addEventListener("click", () => {
  rainOff.classList.remove("hide");
  rainOn.classList.add("hide");
  sound.rain.pause();
});

rainOff.addEventListener("click", () => {
  rainOff.classList.add("hide");
  rainOn.classList.remove("hide");
  sound.rain.play();
});

coffeOn.addEventListener("click", () => {
  coffeOn.classList.add("hide");
  coffeOff.classList.remove("hide");
  sound.coffeShop.pause();
});

coffeOff.addEventListener("click", () => {
  coffeOff.classList.add("hide");
  coffeOn.classList.remove("hide");
  sound.coffeShop.play();
});

fireOff.addEventListener("click", () => {
  fireOff.classList.add("hide");
  fireOn.classList.remove("hide");
  sound.fireSound.play();
});

fireOn.addEventListener("click", () => {
  fireOn.classList.add("hide");
  fireOff.classList.remove("hide");
  sound.fireSound.pause();
});

volumeUp.addEventListener("click", () => {
  num += 5;
  minutesDisplay.textContent = String(num).padStart(2, "0");
});

volumeDown.addEventListener("click", () => {
  if (num > 0) {
    num -= 5;
    minutesDisplay.textContent = String(num).padStart(2, "0");
  }
});

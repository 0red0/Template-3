const skillsSection = document.querySelector(".skills");
const bars = document.querySelectorAll(".skills .bars span");

// To-Top Button
let topPg = document.querySelector(".top-pg");
window.addEventListener("scroll", () => {
   if (window.scrollY >= 600) {
      topPg.style.display = "block";
   } else {
      topPg.style.display = "none";
   }
});

// Skill Bars fill on scroll
window.addEventListener("scroll", () => {
   if (window.scrollY >= skillsSection.offsetTop) {
      bars.forEach((bar) => {
         bar.style.width = bar.dataset.size;
      });
   }
});

// Stats update on scroll
const statsSection = document.querySelector(".stats");
const nums = document.querySelectorAll(".stats .num");
let upTime = false; //trigger function once;[concept]

window.addEventListener("scroll", () => {
   if (window.scrollY >= statsSection.offsetTop - 100) {
      if (!upTime) {
         nums.forEach((num) => {
            upCounter(num);
         });
      }
      upTime = true; //trigger function once;[concept]
   }
});

function upCounter(e) {
   let target = e.dataset.target;
   let innerText = e.innerText;

   let countUp = setInterval(function () {
      if (innerText < target) {
         innerText++;
         e.innerText = innerText;
      } else {
         clearInterval(countUp);
      }
   }, 2000 / target);
}

//Events countdown clock

const timeNow = new Date();
const year = timeNow.getFullYear();

const events = new Date(`10-7-${year}`).getTime();
let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

function countdown() {
   const dateDiff = events - Date.now();
   let dayTxt = Math.floor(dateDiff / days);
   let hourTxt = Math.floor((dateDiff % days) / hours);
   let minuteTxt = Math.floor((dateDiff % hours) / minutes);
   let secondTxt = Math.floor((dateDiff % minutes) / seconds);

   document.querySelector(".units .day").innerText = dayTxt;
   document.querySelector(".units .hour").innerText = hourTxt;
   document.querySelector(".units .minute").innerText =
      minuteTxt < 10 ? `0${minuteTxt}` : minuteTxt;
   document.querySelector(".units .second").innerText =
      secondTxt < 10 ? `0${secondTxt}` : secondTxt;
}
setInterval(countdown, 1000);

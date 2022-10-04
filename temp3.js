// const skillsSection = document.querySelector(".skills");
// const bars = document.querySelectorAll(".skills .bars span");

// // To-Top Button
// let topPg = document.querySelector(".top-pg");
// window.addEventListener("scroll", () => {
//    if (window.scrollY >= 600) {
//       topPg.style.display = "block";
//    } else {
//       topPg.style.display = "none";
//    }
// });

// // Skill Bars fill on scroll
// window.addEventListener("scroll", () => {
//    if (window.scrollY >= skillsSection.offsetTop) {
//       bars.forEach((bar) => {
//          bar.style.width = bar.dataset.size;
//       });
//    }
// });

// Stats update on scroll
const statsSection = document.querySelector(".stats");
const nums = document.querySelectorAll(".stats .num");
let upTime = false;

window.addEventListener("scroll", () => {
   if (window.scrollY >= statsSection.offsetTop) {
      if (!upTime) {
         nums.forEach((num) => countUp(num));
      }
      upTime = true;
   }
});
//
function countUp(el) {
   let target = el.dataset.number;
   let Icounter = setInterval(() => {
      el.textContent++;
      if (el.textContent >= target) {
         clearInterval(Icounter);
      }
   }, 10);
}

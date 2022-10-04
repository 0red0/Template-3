const skillsSection = document.querySelector(".skills");
const bars = document.querySelectorAll(".skills .bars span");

// To Top Button
let topPg = document.querySelector(".top-pg");
window.onscroll = function () {
   if (window.scrollY >= 600) {
      topPg.style.display = "block";
   } else {
      topPg.style.display = "none";
   }
};
// Skill Bars fill on Section scroll
window.onscroll = function () {
   if (window.scrollY >= skillsSection.offsetTop) {
      bars.forEach((bar) => {
         bar.style.width = bar.dataset.size;
      });
   }
};

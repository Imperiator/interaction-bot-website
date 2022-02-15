let login = document.querySelector(".login");
let stats = document.querySelector(".ul-stats");

login.addEventListener("click", function () {
  window.location.href = "/login.html";
});
  
  gsap.timeline({
    scrollTrigger: {
      trigger: ".content",
      start: "top 20%",
      end: "top -25%",
      markers: true,
      scrub: 1,

    },
  }).from(".languages", {
    y: 100,
    opacity: 0,
  }).from(".auto-translate", {
    y: 100,
    opacity: 0,
  }).from(".no-pollute", {
    y: 100,
    opacity: 0,
  }).from(".premium", {
    y: 100,
    opacity: 0,
  })
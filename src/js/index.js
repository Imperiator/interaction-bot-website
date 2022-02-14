let login = document.querySelector(".login");
let stats = document.querySelector(".ul-stats");

login.addEventListener("click", function () {
  window.location.href = "/login.html";
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".content",
      start: "center center",
      end: "bottom top",
      // markers: true,
      scrub: true,
      pin: true,
    },
  })
  .to(".arg1", {
    opacity: 1,
  }).to(".arg2", {
    opacity: 1,
  }).to(".arg3", {
    opacity: 1,
  }).to(".arg4", {
    opacity: 1,
  }).to(".arg5", {
    opacity: 1,
  }).to(".arg6", {
    opacity: 1,
  }).to("html", {
      "--args-opacity": 1,
  })
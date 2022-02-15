let login = document.querySelector(".login");
let stats = document.querySelector(".ul-stats");

login.addEventListener("click", function () {
  window.location.href = "/login.html";
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".content",
      start: "-20% top",
      end: "-20% top",
      // markers: true,
      scrub: false,
      // pin: true,
      anticipatePin: 1,
    },
  })
  .to(".scroll", {
    opacity: 0,
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
  });
  
  
  gsap.timeline({
    scrollTrigger: {
      trigger: ".why",
      start: "top top",
      end: "top top",
      markers: true,
      scrub: false,

    },
  }).to(".languages", {
    y: -100,
    opacity: 1,
  }).to(".auto-translate", {
    y: -100,
    opacity: 1,
  }).to(".no-pollute", {
    y: -100,
    opacity: 1,
  }).to(".premium", {
    y: -100,
    opacity: 1,
  })
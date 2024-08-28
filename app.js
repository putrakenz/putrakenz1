const navBtn = document.querySelector(".mobile-nav-btn");
const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const navbar = document.querySelector(".navbar");

navOpen.addEventListener("click", function (e) {
  navbar.style.display = "flex";
  navOpen.style.display = "none";
  navClose.style.display = "block";
});

navClose.addEventListener("click", function (e) {
  navbar.style.display = "none";
  navClose.style.display = "none";
  navOpen.style.display = "block";
});

navbar.addEventListener("click", function (e) {
  navbar.style.display = "none";
  navClose.style.display = "none";
  navOpen.style.display = "block";
});

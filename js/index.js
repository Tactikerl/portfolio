const navToggle = document.querySelector(".navi_toggle");
const navLinks = document.querySelectorAll(".navi_link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav_open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
});

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

// navbar js code
const boxmenu = document.querySelector(".box-menu");
const navBar = document.querySelector(".navbar");
boxmenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  boxmenu.classList.toggle("active");
});

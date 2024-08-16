AOS.init();

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

function myFunction(number) {
  var dots = document.getElementById("dots" + number);
  var moreText = document.getElementById("more" + number);
  var btnText = document.getElementById("myBtn" + number);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// navbar js code
const boxmenu = document.querySelector(".box-menu");
const navBar = document.querySelector(".navbar");
boxmenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  boxmenu.classList.toggle("active");
});

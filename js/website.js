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

// read more and less
var Cbutton = document.querySelectorAll(".toggle-btn");
Cbutton.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const paragraph = document.getElementById(targetId);
    const moreText = paragraph.querySelector(".more-text");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      this.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      this.textContent = "Read More";
    }
  });
});

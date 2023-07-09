const navbar = document.getElementById("top"); // Change "top" to "navbar"
const scrollOffset = window.innerHeight;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > scrollOffset) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

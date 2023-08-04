const navbar = document.getElementById("top");
const scrollOffset = window.innerHeight;

let event = window.addEventListener("scroll", () => {
  if (window.scrollY > scrollOffset) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function observeElements(elements, animationClass, threshold) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          let data = entry.intersectionRect;
          // console.log("I can detect you..", data);
        } else {
          entry.target.classList.remove(animationClass);
          // console.log("I can't find you anymore");
        }
      });
    },
    {
      threshold: threshold,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

const animate = document.querySelectorAll(".animation");
observeElements(animate, "scroll-animation", 0.1);

const animate2 = document.querySelectorAll(".slide-in");
observeElements(animate2, "slide-animation", 0.2);

module.exports = { event, observeElements, animate, animate2 };

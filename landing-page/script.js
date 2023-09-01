const navbar = document.getElementById("nav");
const scrollOffset = window.innerHeight;

let event = window.addEventListener("scroll", () => {
  if (window.scrollY > scrollOffset) {
    navbar.classList.add("scrolled");
    console.log("scroll added!");
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
        } else {
          entry.target.classList.remove(animationClass);
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

// for the text-reveal
const lineInnerElements = document.querySelectorAll(".line-inner");
lineInnerElements.forEach((element, index) => {
  element.style.animationDelay = `${index * 250}ms`;
});

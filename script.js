document.addEventListener("DOMContentLoaded", function () {

  const scrollIndicator = document.getElementById("scrollIndicator");
  const nextSection = document.getElementById("about");

  // Smooth scroll on click
  scrollIndicator.addEventListener("click", function () {
    nextSection.scrollIntoView({
      behavior: "smooth"
    });
  });

  // Fade out when scrolling
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      scrollIndicator.classList.add("hide");
    } else {
      scrollIndicator.classList.remove("hide");
    }
  });

});
document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => {
    observer.observe(section);
  });

});
const aboutSection = document.getElementById("about");
window.addEventListener("scroll", function () {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    aboutSection.classList.add("visible");
  }
});


const openBtn = document.querySelector(".about-open");
const closeBtn = document.querySelector(".about-close");
const panel = document.querySelector(".about-panel");
const reveals = document.querySelectorAll(".reveal");
const progressBars = document.querySelectorAll(".progress");

openBtn.addEventListener("click", () => {
  panel.classList.add("active");
  document.body.classList.add("panel-open");
});

closeBtn.addEventListener("click", () => {
  panel.classList.remove("active");
  document.body.classList.remove("panel-open");
});

/* Reveal animation inside panel */
panel.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("active");
    }
  });

  progressBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < trigger && !bar.classList.contains("done")) {
      bar.style.width = bar.getAttribute("data-width");
      bar.classList.add("done");
    }
  });
});

const backTopBtn = document.querySelector(".harsh-back-top");

backTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.querySelectorAll(".harsh-btn, .about-open").forEach(button => {

  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0,0)";
  });

});





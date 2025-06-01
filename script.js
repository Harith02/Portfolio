const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll reveal for sections
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Trigger reveal on page load
window.dispatchEvent(new Event("scroll"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Optional: only once
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('section.section').forEach(section => {
    observer.observe(section);
  });





const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.querySelector(".message").scrollIntoView({ behavior: "smooth" });
  startBtn.textContent = "♡ Para ti, mi niña";
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

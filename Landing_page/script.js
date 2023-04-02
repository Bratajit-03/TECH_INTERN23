let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
  // Wrap around the slide index if it goes out of bounds
  slideIndex = (index + slides.length) % slides.length;

  // Set the active class for the current slide and indicator
  slides.forEach(slide => slide.classList.remove("active"));
  indicators.forEach(indicator => indicator.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  indicators[slideIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

// Show the first slide on page load
showSlide(0);

// Handle click events for the previous and next buttons
document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(1);
});

// Handle click events for the slide indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index);
  });
});

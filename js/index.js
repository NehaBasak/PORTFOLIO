// Small Screen Drop Down
const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".hamburger input");

menu.addEventListener("click", () => {
  navRight.classList.toggle("active");
});

// h1>span
const textElement = document.getElementById("typing-text");
const word = "FRONTEND DEVELOPER";
let index = 0;
let isDeleting = false;
function type() {
  if (!isDeleting) {
    textElement.textContent = word.substring(0, index + 1);
    index++;
    if (index === word.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500);
      return;
    }
  } else {
    textElement.textContent = word.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
      setTimeout(type, 2000);
      return;
    }
  }
  setTimeout(type, 100);
}
type();

// Banner-img
window.addEventListener("load", () => {
  const image = document.getElementById("floatingImage");
  image.classList.add("animate-image");
});

// Small Education Section
const sliderTrack = document.getElementById("sliderTrack");
const totalSlides = document.querySelectorAll(".slide").length;
let currentSlide = 0;

function updateSliderPosition() {
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSliderPosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when user scrolls down 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Small Screen Drop Down
const navRight = document.querySelector(".nav-right");
console.log(navRight);
const list = document.querySelector(".icon");
console.log(list);
list.addEventListener("click", () => {
  console.log(navRight.classList);
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
      }, 1500); // Pause before deleting
      return;
    }
  } else {
    textElement.textContent = word.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
      setTimeout(type, 2000); // 2s delay before typing again
      return;
    }
  }
  setTimeout(type, 100); // Typing/deleting speed
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


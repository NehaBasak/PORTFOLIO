// Small Screen Drop Down
const navRight = document.querySelector(".nav-right");
console.log(navRight);
const list = document.querySelector(".icon");
console.log(list);
list.addEventListener("click", ()=>{
    console.log(navRight.classList);
    navRight.classList.toggle("active");
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
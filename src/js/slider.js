const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

function changeSlide() {
  slides.forEach((e) => {
    e.classList.remove("first-slide")
  })
  const nextSlideIndex = (currentSlideIndex + 2) % slides.length;
  slides[currentSlideIndex].style.transform = "translateX(100%) rotateY(90deg)";
  slides[nextSlideIndex].style.transform = "translateX(-5%) rotateY(0deg)";
  slides[nextSlideIndex].classList.add("first-slide")
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
}
changeSlide()
changeSlide()

setInterval(changeSlide, 3000); // Adjust the timing as needed

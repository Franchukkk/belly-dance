// if(document.querySelector(".slide")) {
const slides = document.querySelectorAll(".slide")
let currentSlideIndex = 0

function changeSlide() {
    const nextSlideIndex = (currentSlideIndex + 1) % slides.length
    slides[currentSlideIndex].style.transform = "translateX(100%) rotateY(90deg)"
    slides[nextSlideIndex].style.transform = "translateX(0) rotateY(0deg)"
    currentSlideIndex = nextSlideIndex
}

changeSlide()

setInterval(changeSlide, 3000)
  
// }
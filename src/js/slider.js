const slides = document.querySelectorAll(".slide"),
  timeBetweenSwitch = 300 // різниця в часі між двома слайдами в перемиканні
let currentSlideIndex = 0,
  i = 0

function changeSlide() {
  slides.forEach((e) => {
    if (e.classList.contains("first-slide")) {
      setTimeout(() => {
        e.classList.remove("first-slide")
      }, timeBetweenSwitch)
    } else if (e.classList.contains("second-slide")) {
      e.classList.remove("second-slide")
    }
  })

  slides[currentSlideIndex].classList.add("first-slide")
  setTimeout(() => {
    slides[currentSlideIndex - 1 == -1 ? slides.length - 1 : currentSlideIndex - 1].classList.add("second-slide")
  }, timeBetweenSwitch)

  currentSlideIndex = currentSlideIndex < slides.length - 2  ? currentSlideIndex += 2 : 0
  
}

setInterval(changeSlide, 3000)
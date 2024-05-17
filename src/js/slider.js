<<<<<<< HEAD
if(document.querySelector(".slide")) {

  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0
  let i = 0
  
  function changeSlide() {
    slides.forEach((e) => {
      e.classList.remove("first-slide")
    })
  
    setTimeout(() => {
      slides[currentSlideIndex].style.transform = "translateX(100%) rotateY(90deg)"
    }, 2700)
    const nextSlideIndex = (currentSlideIndex + 2) % slides.length;
    
    if (i % 2 == 0) {
      setTimeout(() => {
        if (i !== 2) {
  
          slides[nextSlideIndex].style.transform = "translateX(10%) rotateY(0deg)"
  
        }
      }, 300)
  
    } else if (i == 0) {
      slides[nextSlideIndex].style.transform = "translateX(10%) rotateY(0deg)"
    }
  
    if (i !== 1) {
      slides[currentSlideIndex].classList.add("first-slide")
    }
  
    currentSlideIndex = (currentSlideIndex + 1) % slides.length
    i++
  }
  
  changeSlide()
  changeSlide()
  
  setInterval(changeSlide, 3000)
  setInterval(changeSlide, 3000)
}
=======
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
>>>>>>> a7649c1627730dbf158d2382edd8ff1f7e04c671

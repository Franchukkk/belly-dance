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

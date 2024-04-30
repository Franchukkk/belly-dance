document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0
    
    if (document.querySelector(".header-line")) {
        if (window.innerWidth < 800) {
            window.addEventListener("scroll", function() {
              let currentScroll = window.pageYOffset || document.documentElement.scrollTop
              if (currentScroll > lastScrollTop && currentScroll > 100) {
    
                document.querySelector('.header-line').classList.add('hide')
              } else if (currentScroll < lastScrollTop) {
    
                document.querySelector('.header-line').classList.remove('hide')
              }
              lastScrollTop = currentScroll
            })

        }
    

        let burger = document.querySelector(".burger"),
            burgerMenu = document.querySelector(".top-navigation")
            burgerBtn = document.querySelector(".burger-wrap")
    
            burgerBtn.addEventListener("click", function() {
                burger.classList.toggle("active")
                burgerMenu.classList.toggle("active")
            })

    
    }


})    


if(document.querySelector(".slide")) {
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

}


const btnReadMore = document.querySelectorAll(".readmore")

    btnReadMore.forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault()
            const descriptionMore = item.nextElementSibling
            descriptionMore.classList.toggle("visible")
            item.classList.toggle("readmore-active")
        })
    })

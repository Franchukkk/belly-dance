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

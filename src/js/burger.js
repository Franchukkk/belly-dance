document.addEventListener("DOMContentLoaded", function() {
    let burger = document.querySelector(".burger"),
        burgerMenu = document.querySelector(".top-navigation")
        burgerBtn = document.querySelector(".burger-wrap")

        burgerBtn.addEventListener("click", function() {
            burger.classList.toggle("active")
            burgerMenu.classList.toggle("active")
        })
})
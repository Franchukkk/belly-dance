document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0

    if (document.querySelector(".header-line")) {
        if (window.innerWidth < 800) {
            window.addEventListener("scroll", function () {
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

        burgerBtn.addEventListener("click", function () {
            burger.classList.toggle("active")
            burgerMenu.classList.toggle("active")
        })
    }


    if (document.querySelector(".cross")) {
        // alert("dsa")
        let closeFilter = document.querySelector(".cross"),
            filter = document.querySelector(".filter"),
            filterOpen = document.querySelector(".filter-open")

        function filterToggle() {
            filter.classList.toggle("d-block")
        }
        closeFilter.addEventListener("click", filterToggle)
        filterOpen.addEventListener("click", filterToggle)
    }

    if (document.querySelector(".slide")) {

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

            currentSlideIndex = currentSlideIndex < slides.length - 2 ? currentSlideIndex += 2 : 0

        }
        setTimeout(changeSlide, 0)
        // changeSlide()
        setInterval(changeSlide, 3000)

    }


    if (document.querySelector(".products-sm")) {
        let productImages = document.querySelectorAll('.products-sm img'),
            generalImg = document.querySelector('.general-img img')

        productImages.forEach(function (image) {
            image.addEventListener('click', function () {
                let clickedImageUrl = this.src
                generalImg.src = clickedImageUrl

            })
        })
    }

})

const btnReadMore = document.querySelectorAll(".readmore")

btnReadMore.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault()
        const descriptionMore = item.nextElementSibling
        descriptionMore.classList.toggle("visible")
        item.classList.toggle("readmore-active")
    })
})


// select 
const selects = document.querySelectorAll('.select')

selects.forEach(select => {
    const selectIn = select.querySelector('.select__in'),
        selectItems = select.querySelectorAll('.select__item'),
        thisInput = select.querySelector('.select__input'),
        event = new Event('change')

    selectIn.addEventListener('click', () => {
        selects.forEach(_select => {
            if (_select !== select)
                _select.classList.remove('is-opened')
        })
        select.classList.toggle('is-opened')
    })

    selectItems.forEach(item => {
        item.addEventListener('click', () => {
            thisInput.value = item.dataset.value
            thisInput.dispatchEvent(event)
            selectIn.innerHTML = item.innerHTML
            selectItems.forEach(_item => {
                _item.classList.remove('is-active')
            });
            item.classList.add('is-active')
            select.classList.remove('is-opened')
        })
    })
})

document.addEventListener('click', e => {
    if (!e.target.closest('.select')) {
        selects.forEach(select => {
            if (select.classList.contains('is-opened'))
                select.classList.remove('is-opened')
        })
    }
})

document.addEventListener('keyup', e => {
    if (e.key == 'Escape') {
        selects.forEach(select => {
            if (select.classList.contains('is-opened'))
                select.classList.remove('is-opened')
        })
    }
})

function slider() {
    const sliderContainer = document.querySelector('.carousel-card'),
        sliderImages = [...document.querySelectorAll('.carousel-item')],
        btnSlider = document.querySelectorAll(".btn")

    let imageHeight = sliderImages[0].offsetHeight

    let currentSlide = 0
    btnSlider.forEach(itemBtn => {
        if (sliderImages.length > 3) {
            itemBtn.style.display = "block"
        } else {
            itemBtn.style.display = "none"
        }
    })

    function nextSlide(e) {
        e.preventDefault()
        if (currentSlide < sliderImages.length - 3) {
            currentSlide++
            sliderContainer.style.transition = 'transform 0.3s ease-in-out'
            sliderContainer.style.transform = `translateY(-${currentSlide * imageHeight}px)`
        }
    }

    function prevSlide(e) {
        e.preventDefault()
        if (currentSlide > 0) {
            currentSlide--
            sliderContainer.style.transition = 'transform 0.3s ease-in-out'
            sliderContainer.style.transform = `translateY(-${currentSlide * imageHeight}px)`
        }
    }

    const nextButton = document.querySelector('.btn-next')
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide)
    }

    const prevButton = document.querySelector('.btn-prev')
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide)
    }

}
if (document.querySelector(".img-block")) {
    slider()
    window.addEventListener('resize', () => {
        slider()
    })
}
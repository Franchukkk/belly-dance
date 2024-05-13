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
window.addEventListener("resize", function () {
    setTimeout(() => {
        slaiderComment()
    }, 0)
})
if (document.querySelector(".carousel-card")) {
    const carousel = document.querySelector('.carousel-card'),
        prevButton = document.querySelector('.btn-prev'),
        nextButton = document.querySelector('.btn-next')

    let items = [...document.querySelectorAll(".carousel-item")],
        currentIndex
    if (items.length > 3) {

        prevButton.style.display = "block"
        nextButton.style.display = "block"
        const itemWidth = items[0].offsetHeight + 5

        let isAnimating = false

        function updateCarousel() {
            const firstClone = items[items.length - 1].cloneNode(true)
            firstClone.style.transform = `translateY: (-${itemWidth}px)`
            carousel.insertAdjacentElement("afterbegin", firstClone)
            while (carousel.firstChild) {
                carousel.removeChild(carousel.firstChild)
            }
            for (let i = 0; i < items.length; i++) {
                items[i].style.transform = `translateY(-${itemWidth}px)`
            }

            for (let i = 0; i < items.length; i++) {
                const item = items[i].cloneNode(true)
                item.style.transform = `translateX: (${i} * ${itemWidth}px)`
                carousel.appendChild(item)
            }
        }

        updateCarousel()

        function goToIndex(index) {
            isAnimating = true

            const distance = -index * itemWidth

            currentIndex = (currentIndex + items.length + index) % items.length

            carousel.style.transition = 'transform .5s ease-in-out'
            carousel.style.transform = `translateY(${distance}rem)`

            setTimeout(() => {
                carousel.style.transition = 'none'
                carousel.style.transform = 'none'
                isAnimating = false
                updateCarousel()
            }, 500)
        }

        nextButton.addEventListener('click', (e) => {
            e.preventDefault()
            items.push(items.shift())
            goToIndex(1)
        })

        prevButton.addEventListener('click', (e) => {
            e.preventDefault()
            items.unshift(items.pop())
            goToIndex(-1)
        })

        let touchStartX = 0,
            touchEndX = 0

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX
        })

        carousel.addEventListener('touchmove', (e) => {
            touchEndX = e.touches[0].clientX
        })

        carousel.addEventListener('touchend', () => {
            const touchDiff = touchStartX - touchEndX
            if (touchDiff > 50) {
                items.push(items.shift())
                goToIndex(1)
            } else if (touchDiff < -50) {
                items.unshift(items.pop())
                goToIndex(-1)
            }
        })
    }
}
// function slaiderComment() {
//     if (document.querySelector('.carousel')) {

//         const carousel = document.querySelector('.carousel'),
//             prevButton = document.querySelector('.btn-prev'),
//             nextButton = document.querySelector('.btn-next')

//         let items = [...document.querySelectorAll(".carousel-item")]
//         let itemWidth

//         let currentIndex = 0,
//             isAnimating = false
        
            
//         function updateCarousel() {
//             while (carousel.firstChild) {
//                 carousel.removeChild(carousel.firstChild)
//             }
        
//             for(let i = 0; i < items.length; i++) {
//                 items[i].style.transform = `translateY(-${itemWidth}px)`
//             }

//             for (let i = 0; i < items.length; i++) {
//                 const item = items[i].cloneNode(true)
//                 item.style.left = i * itemWidth + "px"
//                 carousel.appendChild(item)
//             }
//             readMoreUpgrade()
//         }

//         updateCarousel()

//         function goToIndex(index) {
//             isAnimating = true

//             const distance = -index * itemWidth

//             currentIndex = (currentIndex + items.length + index) % items.length

//             carousel.style.transition = 'transform .5s ease-in-out'
//             carousel.style.transform = `translateY(${distance}px)`

//             setTimeout(() => {
//                 carousel.style.transition = 'none'
//                 carousel.style.transform = 'none'
//                 isAnimating = false
//                 updateCarousel()
//             }, 500)
//         }

//         nextButton.addEventListener('click', (e) => {
//             e.preventDefault()
//             items.push(items.shift())
//             goToIndex(1)
//         })

//         prevButton.addEventListener('click', (e) => {
//             e.preventDefault()
//             items.unshift(items.pop())
//             goToIndex(-1)
//         })
//     }

// }
// slaiderComment()
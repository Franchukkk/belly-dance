
if(document.addEventListener("DOMContentLoaded",(function(){let e=0;if(document.querySelector(".header-line")){window.innerWidth<800&&window.addEventListener("scroll",(function(){let t=window.pageYOffset||document.documentElement.scrollTop;t>e&&t>100?document.querySelector(".header-line").classList.add("hide"):t<e&&document.querySelector(".header-line").classList.remove("hide"),e=t}));let t=document.querySelector(".burger"),n=document.querySelector(".top-navigation");burgerBtn=document.querySelector(".burger-wrap"),burgerBtn.addEventListener("click",(function(){t.classList.toggle("active"),n.classList.toggle("active")}))}})),document.querySelector(".slide")){const e=document.querySelectorAll(".slide");let t=0;function changeSlide(){const n=(t+1)%e.length;e[t].style.transform="translateX(100%) rotateY(90deg)",e[n].style.transform="translateX(0) rotateY(0deg)",t=n}changeSlide(),setInterval(changeSlide,3e3)}const btnReadMore=document.querySelectorAll(".readmore");btnReadMore.forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();e.nextElementSibling.classList.toggle("visible"),e.classList.toggle("readmore-active")}))}));

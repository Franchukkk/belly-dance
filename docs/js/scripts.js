

document.addEventListener("DOMContentLoaded",(function(){let e=0;if(document.querySelector(".header-line")){window.addEventListener("scroll",(function(){let t=window.pageYOffset||document.documentElement.scrollTop;t>e&&t>100?document.querySelector(".header-line").classList.add("hide"):t<e&&document.querySelector(".header-line").classList.remove("hide"),e=t}));let s=document.querySelector(".burger"),r=document.querySelector(".top-navigation");function t(){s.classList.toggle("active"),r.classList.toggle("active")}burgerBtn=document.querySelector(".burger-wrap"),burgerBtn.addEventListener("click",t),document.querySelectorAll(".scroll-link").forEach((e=>{e.addEventListener("click",(function(e){window.innerWidth<800&&t()}))}))}if(document.querySelector("#phone")){let l=document.querySelector("#phone");l.value="+380",l.addEventListener("input",(function(e){l.value.startsWith("+380")||(l.value="+380");let t=l.value.slice(4).replace(/\D/g,"");t.length>9&&(t=t.slice(0,9)),l.value="+380"+t})),l.addEventListener("keydown",(function(e){l.selectionStart<4&&("Backspace"===e.key||"Delete"===e.key)&&e.preventDefault()})),document.querySelector("form").addEventListener("submit",(function(e){var t;t=l.value,/\+380[0-9]{9}$/.test(t)||(e.preventDefault(),alert("Невірний формат номера телефону. Має бути +380XXXXXXXXX"))}))}if(document.querySelector(".cross")){let i=document.querySelector(".cross"),d=document.querySelector(".filter"),a=document.querySelector(".filter-open");function n(){d.classList.toggle("d-block")}i.addEventListener("click",n),a.addEventListener("click",n)}if(document.querySelector(".slide")){const u=document.querySelectorAll(".slide"),m=300;let f=0;function c(){u.forEach((e=>{e.classList.contains("first-slide")?setTimeout((()=>{e.classList.remove("first-slide")}),m):e.classList.contains("second-slide")&&e.classList.remove("second-slide")})),u[f].classList.add("first-slide"),setTimeout((()=>{u[f-1==-1?u.length-1:f-1].classList.add("second-slide")}),m),f=f<u.length-2?f+=2:0}setTimeout(c,0),setInterval(c,3e3)}if(document.querySelector(".products-sm")){let v=document.querySelectorAll(".products-sm img"),y=document.querySelector(".general-img img");v.forEach((function(e){e.addEventListener("click",(function(){let e=this.src;y.src=e}))}))}if(document.querySelector(".privacy-policy")){let p=document.querySelector(".privacy-policy"),L=document.querySelector(".privacy a");function o(){p.classList.toggle("d-none")}back.addEventListener("click",(function(e){e.preventDefault(),o()})),L.addEventListener("click",(function(e){e.preventDefault(),o()}))}}));const btnReadMore=document.querySelectorAll(".readmore");btnReadMore.forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();e.nextElementSibling.classList.toggle("visible"),e.classList.toggle("readmore-active")}))}));const selects=document.querySelectorAll(".select");function slider(){const e=document.querySelector(".carousel-card"),t=[...document.querySelectorAll(".carousel-item")],n=document.querySelectorAll(".btn");let c=t[0].offsetHeight,o=0;n.forEach((e=>{e.style.display=t.length>3?"block":"none"}));const s=document.querySelector(".btn-next");s&&s.addEventListener("click",(function(t){t.preventDefault(),o>0&&(o--,e.style.transition="transform 0.3s ease-in-out",e.style.transform=`translateY(-${o*c}px)`)}));const r=document.querySelector(".btn-prev");r&&r.addEventListener("click",(function(n){n.preventDefault(),o<t.length-3&&(o++,e.style.transition="transform 0.3s ease-in-out",e.style.transform=`translateY(-${o*c}px)`)}))}if(selects.forEach((e=>{const t=e.querySelector(".select__in"),n=e.querySelectorAll(".select__item"),c=e.querySelector(".select__input"),o=new Event("change");t.addEventListener("click",(()=>{selects.forEach((t=>{t!==e&&t.classList.remove("is-opened")})),e.classList.toggle("is-opened")})),n.forEach((s=>{s.addEventListener("click",(()=>{c.value=s.dataset.value,c.dispatchEvent(o),t.innerHTML=s.innerHTML,n.forEach((e=>{e.classList.remove("is-active")})),s.classList.add("is-active"),e.classList.remove("is-opened")}))}))})),document.addEventListener("click",(e=>{e.target.closest(".select")||selects.forEach((e=>{e.classList.contains("is-opened")&&e.classList.remove("is-opened")}))})),document.addEventListener("keyup",(e=>{"Escape"==e.key&&selects.forEach((e=>{e.classList.contains("is-opened")&&e.classList.remove("is-opened")}))})),document.querySelector(".img-block")&&(slider(),window.addEventListener("resize",(()=>{slider()}))),document.querySelector(".slider-range")){const e=document.querySelector(".slider-range"),t=document.querySelector("#min-handle"),n=document.querySelector("#max-handle"),c=document.querySelector("#range"),o=document.querySelector("#min-price"),s=document.querySelector("#max-price"),r=document.querySelector("#min-value"),l=document.querySelector("#max-value"),i=e.offsetWidth,d=t.offsetWidth;let a=0,u=1e3;function updateRange(){const e=t.offsetLeft,m=n.offsetLeft;c.style.left=e+"px",c.style.width=m-e+"px";const f=Math.round(a+e/(i-d)*(u-a)),v=Math.round(a+m/(i-d)*(u-a));o.value=f,s.value=v,r.textContent=f,l.textContent=v}function handleDrag(e,c){e.preventDefault();const o=e.clientX||e.touches[0].clientX,s=c.offsetLeft,r=e=>{let r=(e.clientX||e.touches[0].clientX)-o+s;r=c===t?Math.max(0,Math.min(r,n.offsetLeft-d)):Math.max(t.offsetLeft+d,Math.min(r,i-d)),c.style.left=r+"px",updateRange()},l=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",l)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",l),document.addEventListener("touchmove",r),document.addEventListener("touchend",l)}t.addEventListener("mousedown",(e=>handleDrag(e,t))),n.addEventListener("mousedown",(e=>handleDrag(e,n))),t.addEventListener("touchstart",(e=>handleDrag(e,t))),n.addEventListener("touchstart",(e=>handleDrag(e,n))),updateRange()}if(document.querySelector(".radio")){const m=document.querySelectorAll(".delivery-method .radio"),f=document.querySelector(".numbPost"),v=f.querySelector("span");function updateNumbPost(e){switch(e){case"newPoszht":case"UkrPoshzta":v.textContent="Номер відділення",f.style.display="block";break;case"newPoszhtPozhtomat":v.textContent="Номер поштомату",f.style.display="block";break;default:f.style.display="none"}}m.forEach((e=>{e.addEventListener("change",(function(){updateNumbPost(this.id)}))}))}if(document.querySelector(".main-img")){const y=document.querySelector(".main-card-img"),p=document.querySelector(".cancel-popup"),L=document.querySelector(".popup-img-block img"),h=document.querySelector(".popup-img");y.addEventListener("click",(function(){h.style.display="block";let e=this.src,t=this.alt;L.src=e,L.alt=t})),p.addEventListener("click",(function(){h.style.display="none"}))}



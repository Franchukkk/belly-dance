//  // select 
// document.addEventListener("DOMContentLoaded", function(){

// console.log("+");
//  const selects = document.querySelectorAll('.select')

//  selects.forEach(select => {
//      const selectIn = select.querySelector('.select__in'),
//          selectItems = select.querySelectorAll('.select__item'),
//          thisInput = select.querySelector('.select__input'),
//          event = new Event('change')

//      selectIn.addEventListener('click', () => {
//         console.log("+");
//         selects.forEach(_select => {
//             if (_select !== select){
//                 _select.classList.remove('is-opened')

//             }
//         })
//         select.classList.toggle('is-opened')
//      })

//      selectItems.forEach(item => {
//          item.addEventListener('click', () => {
//              thisInput.value = item.dataset.value
//              thisInput.dispatchEvent(event)
//              selectIn.innerHTML = item.innerHTML
//              selectItems.forEach(_item => {
//                  _item.classList.remove('is-active')
//              });
//              item.classList.add('is-active')
//              select.classList.remove('is-opened')
//          })
//      })
//  })

//  document.addEventListener('click', e => {
//      if (!e.target.closest('.select')) {
//          selects.forEach(select => {
//              if (select.classList.contains('is-opened'))
//                  select.classList.remove('is-opened')
//          })
//      }
//  })

//  document.addEventListener('keyup', e => {
//      if (e.key == 'Escape') {
//          selects.forEach(select => {
//              if (select.classList.contains('is-opened'))
//                  select.classList.remove('is-opened')
//          })
//      }
//  })
// })
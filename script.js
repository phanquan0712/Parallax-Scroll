const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let nav = $('#nav');
let items = $$('.item')
document.addEventListener('scroll', (event) => {
   if(window.scrollY > 500) {
      nav.classList.add('toFixed')
   } else {
      nav.classList.remove('toFixed')
   }
   items.forEach(item => {
      if(Math.abs(item.offsetTop - window.scrollY) < 350) {
         item.classList.add('active')
      } else {
         item.classList.remove('active')
      }
   })
})
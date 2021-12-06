//menu
//script para acionar o menu mobile
let burgerBox = document.querySelector('.hamburger-wrapper');
let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu-mobile');
let bg = document.querySelector('.bg');


burger.addEventListener('click', ()=>{
  burger.classList.toggle('is-active');
   menu.classList.toggle('menu-active');
  
   if(burger.classList.contains('is-active')){
     document.body.style.overflow = 'hidden';
     bg.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
   }
});

//fechar ao clicar no bg

   bg.addEventListener('click', ()=>{
     menu.classList.remove('menu-active');
     burger.classList.remove('is-active');
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
   });

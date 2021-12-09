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
     cart.classList.remove('cart-active');
     burger.classList.remove('is-active');
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
   });


//ativar lupa no mobile

let pesquisa = document.getElementById('pesquisa-mobile');
let lupa = document.getElementById('lupa-mobile');
let input = document.querySelector('.search-wrapper__input-mobile');
lupa.addEventListener('click',()=>{
  pesquisa.classList.toggle('active-search');
  input.focus();
})


//abrir modal de filtro
let modalBtn = document.getElementById('open-modal-filtro');

modalBtn.addEventListener('click',()=>{
  Swal.fire({
    template: '#my-template'
  })
})


//cart lateral
//script para acionar o menu mobile
let cart = document.querySelector('.cart');
let cartBtn = document.querySelector('.icones__wrapper-bag');
let closeCart = document.getElementById('closeCart');

cartBtn.addEventListener('click', ()=>{
  cart.classList.toggle('cart-active');
  displayCart();
   if(cart.classList.contains('cart-active')){
     document.body.style.overflow = 'hidden';
     bg.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
   }
});

closeCart.addEventListener('click', ()=>{
  cart.classList.remove('cart-active');
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
})



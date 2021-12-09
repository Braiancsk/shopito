let plus = document.querySelectorAll('.up')
let subtract = document.querySelectorAll('.down')
let quantity = document.getElementById('quantidade');


for(var i = 0; i < plus.length; i++){
    var newValue = quantity.value++;  
    plus[i].addEventListener('click', (e)=>{
        e.stopPropagation();
        var newPlus = parseInt(quantity.value++);

        quantity.innerHTML = newPlus;
     
        
    });
}

function removerQuantidade(e){
    for(var i = 0; i < subtract.length; i++){
        var newValue = quantity.value--;  
        subtract[i].addEventListener('click', (e)=>{
            e.stopPropagation();
            var newPlus = parseInt(quantity.value--);
            if(quantity.value <= 0){
                quantity.value = 1;
            }else{
                quantity.innerHTML = newPlus;
            }
        });
    }
}

removerQuantidade();





//modal de produto
let modalProduto = document.getElementById('modal-produto');
let bgModal = document.querySelector('.bg-modal-product');
let card = document.querySelectorAll('.card');
let closeModal = document.getElementById('closeModal');

for(var c = 0; c < card.length; c++){
    card[c].addEventListener('click', (e)=>{
    e.stopPropagation();
    modalProduto.classList.add('modal-produto-active');   
    console.log(e.target);         
        if(modalProduto.classList.contains('modal-produto-active')){
               document.body.style.overflow = 'hidden';
               bgModal.classList.add('bg-modal-active')
        }else{
               document.body.style.overflow = 'auto';
               bgModal.style.display = 'none';
        }
    })
   
}


//fechar ao clicar no bg

   bgModal.addEventListener('click', (e)=>{
    e.stopPropagation();
    modalProduto.classList.remove('modal-produto-active');    
    document.body.style.overflow = 'auto';
    bgModal.classList.remove('bg-modal-active')
    
   });

   closeModal.addEventListener('click', (e)=>{
    e.stopPropagation();
    modalProduto.classList.remove('modal-produto-active');    
    document.body.style.overflow = 'auto';
    bgModal.classList.remove('bg-modal-active')
    
   });


//cupom

let cupom = document.querySelectorAll('.cupom');

cupom.forEach(cupom => {
    cupom.addEventListener('click',()=>{
        Swal.fire({
            template: '#modal-cupom ',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
          })
    })
});


let cupom2 = document.querySelectorAll('.cupom-2');

cupom2.forEach(cupom => {
    cupom.addEventListener('click',()=>{
        Swal.fire({
            template: '#modal-cupom-2 ',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
          })
    })
});

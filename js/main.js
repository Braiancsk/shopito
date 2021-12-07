let plus = document.querySelectorAll('.up')
let subtract = document.querySelectorAll('.down')
let quantity = document.getElementById('quantidade');


for(var i = 0; i < plus.length; i++){
    var newValue = quantity.value++;  
    plus[i].addEventListener('click', (e)=>{
        var newPlus = parseInt(quantity.value++);

        quantity.innerHTML = newPlus;
     
        
    });
}

for(var i = 0; i < subtract.length; i++){
    var newValue = quantity.value--;  
    subtract[i].addEventListener('click', ()=>{
        var newPlus = parseInt(quantity.value--);
        if(quantity.value <= 0){
            quantity.value = 1;
        }else{
            quantity.innerHTML = newPlus;
        }
    });
}


let addBtn = document.querySelectorAll('.add-to-cart');

for(var b = 0; b < addBtn.length; b++){
    addBtn[b].addEventListener('click', ()=>{
        Swal.fire({
            template: '#my-template-product'
        })
    })
}


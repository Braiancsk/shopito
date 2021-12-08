let products = [
    {
    name: 'Tênis masculino',
    description: 'lorem ipsum dolor sit amet',
    img: 'product',
    price: 'R$ 180',
    inCart: 0,
    },
    {
    name: 'Relogio Masculino',
    description: 'lorem ipsum dolor sit amet',
    img: 'product',
    price: 'R$ 300',
    inCart: 0,
    },
    {
    name: 'Camiseta masculino',
    description: 'lorem ipsum dolor sit amet',
    img: 'product',
    price: 'R$ 80',
    inCart: 0,
    },
    {
    name: 'Óculos masculino',
    description: 'lorem ipsum dolor sit amet',
    img: 'product',
    price: 'R$ 100',
    inCart: 0,
    },

]

let addBtn = document.querySelectorAll('.add-to-cart');

for(var b = 0; b < addBtn.length; b++){
    addBtn[b].addEventListener('click', (e)=>{
        e.stopPropagation();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Produto adicionado ao carrinho'
          })
          
          cartNumbers(products[b]);
    })
}



function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.bag-quantity').textContent = productNumbers;
    }
}

onLoadCartNumbers();

function cartNumbers(product){
    console.log('The product clicked was', product)
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.bag-quantity').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.bag-quantity').textContent = 1;
    }
}
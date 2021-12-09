let products = [
    {
    name: 'Tênis masculino',
    description: 'lorem ipsum dolor sit amet',
    tag: 'product',
    price: 280,
    inCart: 0,
    },
    {
    name: 'Controle Xbox One',
    description: 'lorem ipsum dolor sit amet',
    tag: 'product-3',
    price: 350,
    inCart: 0,
    },
    {
    name: 'Relogio masculino',
    description: 'lorem ipsum dolor sit amet',
    tag: 'product-2',
    price: 150,
    inCart: 0,
    },
    {
    name: 'Óculos masculino',
    description: 'lorem ipsum dolor sit amet',
    tag: 'product-4',
    price: 50,
    inCart: 0,
    },

]

let addBtn = document.querySelectorAll('.add-to-cart');

for(let b = 0; b < addBtn.length; b++){
    addBtn[b].addEventListener('click', (e)=>{
        e.stopPropagation();   
        cartNumbers(products[b]);
        totalCost(products[b]);
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
    })
}


function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.bag-quantity').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.bag-quantity').textContent = 1;
    }

    setItems(product);
}


function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems)

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


function totalCost(product){
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost')
    console.log("my cart cost is", cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }else{
        localStorage.setItem('totalCost', product.price)
    }
    
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    let cartProduct = document.querySelector('.cart-products');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost')

    if(cartItems){
       
        Object.values(cartItems).map(item => {
            cartProduct.innerHTML += `           
            <div class="col-4">
                <img class="cart__img" src="images/${item.tag}.jpg" alt="produto" />
            </div>

            <div class="col-8">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="cart__title">
                        <h5 id="product-title">${item.name}</h5>
                        <p id="product-description">${item.description}</p>
                    </div>

                    <div class="excluir">
                        <img class="exluir-btn" src="images/trash.svg" alt="icone de exluir"/>
                    </div>
                    
                </div>

                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="cart__price">R$ <b id="product-price">${item.price}</b></h4>
                    <div class="d-flex align-items-center">
                        <button class="down d-flex align-items-center justify-content-center">
                            <img class="max-w-7" src="images/down.svg" alt="seta para subtrair">
                        </button>
                        
                        <input disabled id="quantidade" type="text" class="quantidade" name="quantidade" value="${item.inCart}"/>

                        <button class="up d-flex align-items-center justify-content-center">
                            <img class="max-w-7" src="images/up.svg" alt="seta para somar">
                        </button>
                    </div>
                </div>

                <p class="cart__extras">2x (nome do extra), 1x (nome do extra 2), 2x (nome do extra)</p>
            </div>
   
            `
        })

        cartProduct.innerHTML += `
        <div class="wrapper">
        <div class="d-flex align-items-center">
        <h2>Valor total:</h2>
        <h2>R$ ${cartCost},00</h2>
        </div>
        
    
        <a class="btn-finalizar" href="checkout.html">Finalizar compra</a>
        </div>
        `
    }else{
        cartProduct.innerHTML = `<div class="vazio d-flex flex-column align-items-center justify-content-center mt-4">
        <h4>Seu carrinho está vazio</h4>
        <img class="img-fluid" src="images/plants.png" alt="carrinho vazio" />
        </div>`;
    }
    
}





function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.bag-quantity').textContent = productNumbers;
    }
}

onLoadCartNumbers();
displayCart();
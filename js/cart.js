let addBtn = document.querySelectorAll('.add-to-cart');

for(var b = 0; b < addBtn.length; b++){
    addBtn[b].addEventListener('click', (e)=>{
        e.stopPropagation();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
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
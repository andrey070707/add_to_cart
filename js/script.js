let btnsAdd = document.getElementsByClassName('btn-add');
let btnsRemove = document.getElementsByClassName('btn-remove');
let name = document.getElementById('name');
let cart = document.getElementById('cart');
let stock = 10;
for (const btnAdd of btnsAdd) {
    btnAdd.addEventListener('click', function() {
        if(cart.textContent == 0) {
            cart.textContent = '';
        }
        cart.textContent ++;
        if(btnAdd.nextElementSibling.textContent == 0) {
            btnAdd.nextElementSibling.textContent = '';
        }
        btnAdd.nextElementSibling.textContent ++;
        if(btnAdd.nextElementSibling.textContent > 0) {
            btnAdd.nextElementSibling.nextElementSibling.classList.remove('disabled');
        }
        if(btnAdd.nextElementSibling.textContent == stock) {
            btnAdd.classList.add('disabled');
            alert('Product is finished');
        }
    });
}
for (const btnRemove of btnsRemove) {
    btnRemove.addEventListener('click', function() {
        btnRemove.previousElementSibling.textContent --;
        if (btnRemove.previousElementSibling.textContent == 0) {
            btnRemove.classList.add('disabled')
        }
        if (btnRemove.previousElementSibling != stock) {
            btnRemove.previousElementSibling.previousElementSibling.classList.remove('disabled')
        }
        cart.textContent --;
    });
}
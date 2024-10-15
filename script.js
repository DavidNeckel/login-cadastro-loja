// Validação do login com redirecionamento para a loja
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    if (email === "teste@teste.com" && password === "12345678") {
        alert('Login realizado com sucesso!');
        window.location.href = "loja.html"; // Redireciona para a página da loja
    } else {
        alert('E-mail ou senha incorretos.');
    }
});

// Validação do cadastro
document.getElementById('cadastroForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Cadastro realizado com sucesso!');
});

// ---------------------- LOJA -------------------------

let cart = [];

function updateCartCount() {
    document.getElementById('cart-count')?.textContent = cart.length;
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total')?.textContent = `R$ ${total.toFixed(2)}`;
}

function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    updateCartTotal();
}

// Adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('R$', '').replace(',', '.'));

        cart.push({ name: productName, price: productPrice });
        updateCartCount();
        alert(`${productName} foi adicionado ao carrinho.`);
    });
});

// Modal do carrinho
const modal = document.getElementById('cart-modal');
const viewCartButton = document.getElementById('view-cart');
const closeButton = document.querySelector('.close');

viewCartButton?.addEventListener('click', function() {
    modal.style.display = 'flex';
    updateCartItems();
});

closeButton?.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Limpar carrinho
document.getElementById('clear-cart')?.addEventListener('click', function() {
    cart = [];
    updateCartCount();
    updateCartItems();
    alert('Carrinho esvaziado.');
});

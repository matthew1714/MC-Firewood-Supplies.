
let cart = [];

function addToCart(name, price) {
    if (name === 'Kindling Nets') {
        const hasLogs = cart.some(item =>
            item.name.includes('Builders Bag') || item.name.includes('Barrow Bag')
        );
        if (!hasLogs) {
            alert('Kindling can only be ordered with a Builders or Barrow Bag.');
            return;
        }
    }
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - £${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    const method = document.getElementById('payment-method').value;
    if (method === 'stripe') {
        alert('Redirecting to Stripe checkout...');
    } else if (method === 'paypal') {
        alert('Redirecting to PayPal...');
    } else {
        alert('Order placed for Cash on Delivery!');
    }
    cart = [];
    updateCart();
}

document.addEventListener("DOMContentLoaded", loadCart);

document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Rating: ${item.rating} ⭐ (${item.reviews} reviews)</p>
                    <div class="cart-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        ${item.quantity}
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout process placeholder");
});


function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout process placeholder");
});

function addToCart(id, name, price, image, description, rating, reviews) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1, image, description, rating, reviews });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    const messageBox = document.createElement("div");
    messageBox.classList.add("cart-message");
    messageBox.textContent = "The item you selected is added to your cart!";
    document.body.appendChild(messageBox);
    
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
    
    if (confirm("Item added to cart! Do you want to view your cart?")) {
        window.location.href = "cart.html";
    }
}
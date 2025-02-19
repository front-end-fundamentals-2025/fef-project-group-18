document.addEventListener("DOMContentLoaded", () => {
    loadProducts(); // Only loads products, not the cart
});

async function loadProducts() {
    try {
        const response = await fetch("products.json");
        const products = await response.json();
        const productContainer = document.getElementById("product-list");
        
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Rating: ${product.rating} ⭐ (${product.reviews} reviews)</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}', '${product.description}', ${product.rating}, ${product.reviews})">
                    Add to Cart
                </button>
            `;
            productContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

function addToCart(id, name, price, image, description, rating, reviews) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1, image, description, rating, reviews });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show confirmation message
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

document.addEventListener("DOMContentLoaded", async function () {
    const productImage = document.getElementById("product-image");
    const productTitle = document.getElementById("product-title");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    const productRating = document.getElementById("product-rating");
    const reviewsList = document.getElementById("reviews-list");
    const buyNowButton = document.getElementById("buy-now");

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const productId = getQueryParam("id");

    try {
        const response = await fetch("products.json");
        const products = await response.json();
        const product = products.find(p => p.id == productId);

        if (product) {
            productImage.src = product.image;
            productTitle.textContent = product.name;
            productDescription.textContent = product.description;
            productPrice.textContent = product.price.toFixed(2);
            productRating.textContent = `${product.rating} ⭐ (${product.reviews} reviews)`;

            buyNowButton.addEventListener("click", function () {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                let item = cart.find(item => item.id == product.id);

                if (item) {
                    item.quantity++;
                } else {
                    cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                window.location.href = "cart.html";
            });

        } else {
            document.querySelector(".product-container").innerHTML = "<p>Product not found.</p>";
        }

    } catch (error) {
        console.error("Error loading product details:", error);
    }
});

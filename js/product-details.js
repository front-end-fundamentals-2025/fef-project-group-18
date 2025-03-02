document.addEventListener("DOMContentLoaded", async function () {
    const productImage = document.getElementById("product-image");
    const productTitle = document.getElementById("product-title");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    const productRating = document.getElementById("product-rating");
    const reviewsList = document.getElementById("reviews-list");
    const buyNowButton = document.getElementById("buy-now");
    const spinner = document.getElementById("loading-spinner"); // Our spinner element
    const productContainer = document.querySelector(".product-container");

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const productId = getQueryParam("id");

    try {
        // Shows the spinner while loading
        spinner.style.display = "block";
        productContainer.style.display = "none";

        const response = await fetch("products.json");
        const products = await response.json();
        const product = products.find(p => p.id == productId);

        setTimeout(() => { // Simulation of loading delay
            if (product) {
                productImage.src = product.image;
                productTitle.textContent = product.name;
                productDescription.textContent = product.description;
                productPrice.textContent = `${product.price.toFixed(2)}`;
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

                productContainer.style.display = "flex"; // Showing the content after loading
            } else {
                productContainer.innerHTML = "<p>Product not found.</p>";
            }

            spinner.style.display = "none"; // Hiding the spinner
        }, 2000);

    } catch (error) {
        console.error("Error loading product details:", error);
        productContainer.innerHTML = "<p>Failed to load product details. Please try again.</p>";
        spinner.style.display = "none"; // Hiding the spinner if there's an error
    }
});

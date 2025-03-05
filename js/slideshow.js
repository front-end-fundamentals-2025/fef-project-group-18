document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../images/comp1.png",
        "../images/comp1.2.png",
        "../images/comp.1.3.png"
    ];

    const heroSection = document.querySelector(".hero");
    const dotsContainer = document.querySelector(".slideshow-dots");
    let currentIndex = 0;

    // Function to check if screen is small
    function isSmallScreen() {
        return window.innerWidth <= 990;
    }

    // Function to set initial image based on screen size
    function setInitialImage() {
        if (isSmallScreen()) {
            images[0] = "../images/comp2.png";  
        } else {
            images[0] = "../images/comp1.png";  
        }
    }

    images.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");                   // Over here the first dot is active
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function changeBackground() {
        heroSection.style.backgroundImage = `url(${images[currentIndex]})`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");

        heroSection.classList.add("fade-in");
        setTimeout(() => {
            heroSection.classList.remove("fade-in");
        }, 1000); // 1s transition

        currentIndex = (currentIndex + 1) % images.length;
    }

    // Detect screen size at load and set the first image
    setInitialImage();

    // Changing the image every 3 seconds
    setInterval(changeBackground, 3000);

    // Initial background setup
    changeBackground();

    // Update first image if window is resized
    window.addEventListener("resize", setInitialImage);
});

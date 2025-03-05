document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../images/comp1.png",
        "../images/comp2.png",
        "../images/comp3.png",
        "../images/comp4.png",
        "../images/comp5.png"
    ];

    let currentIndex = 0;
    const heroSection = document.querySelector(".hero");
    const dotsContainer = document.querySelector(".slideshow-dots");

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

    // Changing the image every 3 seconds
    setInterval(changeBackground, 3000);

    // Initial background setup
    changeBackground();
});

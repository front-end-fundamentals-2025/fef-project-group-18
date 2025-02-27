document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const lightModeButton = document.getElementById("day");
  const darkModeButton = document.getElementById("night");

  if (localStorage.getItem("lightMode") === "enabled") {
    enableLightMode();
  }

  lightModeButton.addEventListener("click", () => {
    enableLightMode();
  });
  darkModeButton.addEventListener("click", () => {
    disableLightMode();
  });
  function enableLightMode() {
    document.body.classList.add("light-mode");
    localStorage.setItem("lightMode", "enabled");
  }
  function disableLightMode() {
    document.body.classList.remove("light-mode");
    localStorage.setItem("lightMode", "disabled");
  }
});

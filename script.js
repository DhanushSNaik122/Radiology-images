document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-mode");
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Light Mode";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Light Mode";
            localStorage.setItem("dark-mode", "enabled");
        } else {
            toggleButton.textContent = "🌙 Dark Mode";
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const organs = document.querySelectorAll(".organ");
    const infoBox = document.getElementById("organInfoBox");
  
    organs.forEach((organ) => {
      organ.addEventListener("click", function (event) {
        const infoText = this.getAttribute("data-info");
  
        if (infoText) {
          infoBox.textContent = infoText;
          infoBox.style.display = "block";
  
          // Position the info box near the clicked element
          infoBox.style.left = `${event.pageX + 10}px`;
          infoBox.style.top = `${event.pageY + 10}px`;
  
          // Hide info box after 3 seconds
          setTimeout(() => {
            infoBox.style.display = "none";
          }, 3000);
        }
      });
    });
  });
  
function toggleTheme() {
    document.querySelector("body").classList.toggle("dark-mode");
}

button = document.getElementById("toggleButton");
button.onclick = toggleTheme;
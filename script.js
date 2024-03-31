function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function openGithub(url) {
    window.open(url, '_blank'); // Open the GitHub URL in a new tab
}

function openLive(url) {
    window.open(url, '_blank'); // Open the Live URL in a new tab
}
console.log("Script loaded");

// Hamburger Menu Toggle

const burgerMenu = document.getElementById('menuIcon');
burgerMenu.addEventListener('click', () => toggleMenu());

const cancelMenu = document.getElementById('cancelIcon');
cancelIcon.addEventListener('click', () => closeMenu());

// Open menu
function toggleMenu() {
    // Hide burgermenu icon
    burgerMenu.style.display = 'none';
    // Show menu items
    const navMenu = document.getElementById('navBox');
    navMenu.style.display = 'block';
    // Convert menu to full screen
    const navMenuBox = document.querySelector('.head-layout');
    navMenuBox.style.width = '100vw';
    navMenuBox.style.height = '100vh';
    navMenuBox.style.position = 'fixed';
    navMenuBox.style.backgroundColor = '#D8BC69';
    navMenuBox.style.justifyContent = 'center';
    // Hide website logo
    const logo = document.querySelector('.head-logo');
    logo.style.display = 'none';
    // Show close menu icon
    cancelMenu.style.display = 'block';
}

// Close menu
function closeMenu() {
    burgerMenu.style.display = "";
    const navMenu = document.getElementById('navBox');
    navMenu.style.display = "";
    const navMenuBox = document.querySelector('.head-layout');
    navMenuBox.style.width = "";
    navMenuBox.style.height = "";
    navMenuBox.style.position = "";
    navMenuBox.style.backgroundColor = "";
    navMenuBox.style.justifyContent = "";
    const logo = document.querySelector('.head-logo');
    logo.style.display = "";
    cancelMenu.style.display = "none";
}
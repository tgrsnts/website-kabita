// Untuk Navbar
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var navbarOpenIcon = document.getElementById("navbar-open");
    var navbarCloseIcon = document.getElementById("navbar-close");
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
        navbarCloseIcon.classList.remove("hidden");
        navbarOpenIcon.classList.add("hidden");
    } else {
        navbar.classList.add("hidden");
        navbarCloseIcon.classList.add("hidden");
        navbarOpenIcon.classList.remove("hidden");
    }
}

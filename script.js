window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (!document.body.classList.contains("menu-open")) {
        header.classList.toggle("scrolled", window.scrollY > 50);
    }
});

const menuToggle = document.querySelector(".menu-toggle");
const menuMobile = document.querySelector(".menu-mobile");
const linksMenu = document.querySelectorAll(".menu-mobile a");

function toggleMenu() {
    menuMobile.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    menuToggle.classList.toggle("active");
}

menuToggle.addEventListener("click", toggleMenu);

linksMenu.forEach(link => {
    link.addEventListener("click", toggleMenu);
});
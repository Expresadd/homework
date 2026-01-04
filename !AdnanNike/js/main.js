document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const body = document.body;
    const burgerBtn = document.getElementById("burger");
    const navLinks = document.querySelectorAll(".nav__link");

    // Функция открытия/закрытия
    function toggleMenu() {
        header.classList.toggle("open");
        body.classList.toggle("menu-open");
    }

    // Открытие/закрытие по бургеру
    burgerBtn.addEventListener("click", toggleMenu);

    // Закрытие по клику на ссылку
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (header.classList.contains("open")) {
                toggleMenu();
            }
        });
    });

    // Закрытие по клику вне меню
    document.addEventListener("click", function (e) {
        const isClickInsideNav = e.target.closest(".nav");
        const isClickOnBurger = e.target.closest(".header__burger-btn");

        if (!isClickInsideNav && !isClickOnBurger && header.classList.contains("open")) {
            toggleMenu();
        }
    });

    // Закрытие по нажатию на Esc
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && header.classList.contains("open")) {
            toggleMenu();
        }
    });
});
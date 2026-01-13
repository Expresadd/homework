// Бургер меню

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

// -------------------------------------------------------------------

// Выбор цвета кроссовок

document.addEventListener('DOMContentLoaded', function() {
    // Находим основную картинку по её id
    const productImage = document.getElementById('productImage');
    
    // Находим все цветные точки
    const colorDots = document.querySelectorAll('.color-dot');

    // Проходим по каждой точке
    colorDots.forEach(dot => {
        // Вешаем обработчик клика
        dot.addEventListener('click', function() {
            // Берём путь к новой картинке из атрибута data-src
            const newImageSrc = this.getAttribute('data-src');
            
            // Меняем src основной картинки
            productImage.src = newImageSrc;

            // Убираем класс "active" у всех точек
            colorDots.forEach(d => d.classList.remove('active'));
            
            // Добавляем класс "active" только нажатой точке
            this.classList.add('active');
        });
    });
});

// -------------------------------------------------------------------

// 360 крутилка

document.getElementById('rotateTrigger').addEventListener('click', function() {
    const productImage = document.getElementById('productImage');
    
    productImage.classList.add('rotate-360');
    
    productImage.addEventListener('animationend', function() {
        productImage.classList.remove('rotate-360');
    }, { once: true });
});

// -------------------------------------------------------------------

// Инфо (плюсики)

document.querySelectorAll('.hotspot').forEach(hotspot => {
    // Создаем tooltip внутри каждого hotspot
    const tooltipText = hotspot.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    hotspot.appendChild(tooltip);

    // Обработчик клика
    hotspot.addEventListener('click', function(e) {
        e.stopPropagation();

        // Закрываем все другие тултипы
        document.querySelectorAll('.tooltip').forEach(t => {
            if (t !== tooltip) t.classList.remove('active');
        });

        // Переключаем текущий
        tooltip.classList.toggle('active');
    });
});

// Закрыть тултип при клике вне
document.addEventListener('click', function(e) {
    if (!e.target.closest('.hotspot')) {
        document.querySelectorAll('.tooltip').forEach(t => {
            t.classList.remove('active');
        });
    }
});

// -------------------------------------------------------------------

// Слайдер

let swiper = new Swiper('.gallery__swiper', {
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1190: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        930: {
            slidesPerView: 2.3,
            spaceBetween: 30,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },

    pagination: {
        el: '.gallery__swiper-pagination',
        clickable: true, // можно кликать по точкам
        dynamicBullets: true, // анимированные точки (увеличиваются в центре)
        dynamicMainBullets: 3, // сколько "активных" точек показывать при dynamicBullets
    },

});


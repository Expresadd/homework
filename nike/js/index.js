// import HeaderFixed from './header.js';
// // import BurgerMenu from './burger.js';
// import { log } from './burger.js';
// import Modal from './modal.js';
// import { productSlider } from './product-slider.js';
// import { sizes } from './sizes.js';

// try {
// 	const headerFixed = new HeaderFixed({
// 		HEADER: 'header',
// 		HEADER_FIXED: 'header--fixed',
// 	});

// new BurgerMenu(
// 	{
// 		BURGER: 'burger',
// 		BURGER_OPEN: 'burger--open',
// 		HEADER_MENU: 'header__menu',
// 		HEADER_MENU_OPEN: 'header__menu--open',
// 		lABEL: {
// 			OPEN: 'Открыть меню',
// 			CLOSE: 'Закрыть меню',
// 		},
// 		PAGE_BODY: 'page__body',
// 		PAGE_BODY_NO_SCROLL: 'page__body--no-scroll',
// 		MENU_LINK: 'menu__link',
// 		BREAKPOINT: 768,
// 		MAIN: 'main',
// 	},
// 	headerFixed,
// );

// 	new Modal({
// 		PAGE_BODY: 'page__body',
// 		PAGE_BODY_NO_SCROLL: 'page__body--no-scroll',
// 	});

// 	productSlider();
// 	sizes();
// } catch (error) {
// 	console.error(error);
// }


const burger = document.querySelector(".burger");
const burgerMenuActive = document.querySelector(".menu");
const noScroll = document.body;

burger.addEventListener("click", () => {
	burger.classList.toggle("burger--open"); // переключатель кнопки бургер на крестик
	if (burger.classList.contains("burger--open")) {
		burgerMenuActive.classList.add("header__menu--open"); // добавляем класс для показа меню
		noScroll.classList.add("no_scroll"); // убираем скролл по Y 

	} else {
		burgerMenuActive.classList.remove("header__menu--open"); // убираем класс для показа меню
		noScroll.classList.remove("no_scroll"); // убираем скролл по Y

	}
});


const menuList = document.querySelector(".menu__list");

menuList.addEventListener("click", event => {
	if (burger.classList.contains("burger--open")) { // чтобы условия работали только при открытом бургере
		if (event.target.classList.contains("menu__link")) { // делегирование 
			burgerMenuActive.classList.remove("header__menu--open"); // убираем класс для показа меню
			burger.classList.toggle("burger--open"); // меняем крестик на бургер
		}
	}
});

document.addEventListener("click", event => {
	if(!event.target.closest(".header__menu")) {
		burgerMenuActive.classList.contains(".header__menu--open");
		burgerMenuActive.classList.remove(".header__menu--open");
	}
});

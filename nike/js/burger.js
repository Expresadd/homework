const burger = document.querySelector(".burger");
const burgerMenuActive = document.querySelector(".menu");
const noScroll = document.body;


export const burgerOpen = () => {
	burgerMenuActive.classList.add("header__menu--open"); // добавляем класс для показа меню
	noScroll.classList.add("no_scroll"); // добавляем скролл по Y 
};

export const burgerClose = () => {
	burgerMenuActive.classList.remove("header__menu--open"); // убираем класс для показа меню
	noScroll.classList.remove("no_scroll"); // убираем скролл по Y
};

export const switchSvg = () => {
	burger.classList.toggle("burger--open"); // переключатель кнопки бургер на крестик
}

burger.addEventListener("click", () => {
	switchSvg();
	if (burger.classList.contains("burger--open")) {
		burgerOpen();
	} else {
		burgerClose();
	}
});


const menuList = document.querySelector(".menu__list");

menuList.addEventListener("click", ({ target }) => {
	if (burger.classList.contains("burger--open")) { // чтобы условия работали только при открытом бургере
		if (target.classList.contains("menu__link")) { // делегирование 
			burgerClose();
			switchSvg();
		}
	}
});

document.addEventListener("click", ({ target }) => {
	if (!target.closest(".header__menu") && !target.closest(".burger")) {
		if (burgerMenuActive.classList.contains("header__menu--open"));
		switchSvg();
		burgerClose();
	}
});
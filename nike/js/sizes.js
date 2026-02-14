const buttonsList = document.querySelector(".product__sizes-list"); // находим div, у которого внутри кнопки

export const sizesFunc = () => {
    buttonsList.addEventListener("click", ({ target }) => {
        if (target.classList.contains("product__sizes-button")) { // делегирование событий
            const buttons = buttonsList.querySelectorAll(".product__sizes-button"); // конст со всеми кнопками
            buttons.forEach(btn => { // перебор
                btn.classList.remove("product__sizes-button--active"); // удаление active со всех кноп.
            });
            target.classList.add("product__sizes-button--active"); // добавление active на кноп., на которую нажал
        }
    });
};

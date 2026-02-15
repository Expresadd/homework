export const swiper = () => {
    new Swiper('.product__slider', {
        loop: true,

        navigation: {
            nextEl: '.product__slider-button--next',
            prevEl: '.product__slider-button--prev',
        },
    });
};

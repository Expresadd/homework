const buttonModalOpen = document.querySelector(".product__buy-button");
const buttonModalClose = document.querySelector(".modal__close");
const modalWindow = document.querySelector(".modal__window.modal-buy");
const modal = document.querySelector(".modal");
const noScroll = document.body;


const modalOpen = () => {
  modalWindow.classList.add("modal__window--open");
  modal.classList.add("modal--open");
  noScroll.classList.add("no_scroll");
};

const modalClose = () => {
  modalWindow.classList.remove("modal__window--open");
  modal.classList.remove("modal--open");
  noScroll.classList.remove("no_scroll");
};

export const startModal = () => {
  buttonModalOpen.addEventListener("click", modalOpen); // открыть при клике на кнопку

  buttonModalClose.addEventListener("click", modalClose); // закрыть при клике на крестик

  modal.addEventListener("click", event => {  // закрыть при клике вне окна
    if (event.target == modal) {
      modalClose();
    }
  });

  document.addEventListener("keydown", event => { // закрытие на esc
    if (event.key === "Escape" && modal.classList.contains("modal--open")) {
      modalClose();
    }
  });
};

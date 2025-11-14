





const modalOpenButton = document.querySelector('.section__button')
const modalOpen = document.querySelector('.modal')
const body = document.body

const funcOpen = () => {
    modalOpen.classList.add('modal--active')
    body.classList.add('body--fixed')
}

// modalOpenButton.addEventListener('click', () => {
//     modalOpen.classList.add('modal-active')
//     body.classList.add('body-fixed')
// })
modalOpenButton.addEventListener('click', funcOpen)

const modalCloseButton = document.querySelector('.modal__close')
const modalClose = document.querySelector('.modal')

const funcClose = () => {
    modalClose.classList.remove('modal--active')
    body.classList.remove('body--fixed')
}

// modalCloseButton.addEventListener('click', () => {
//     modalClose.classList.remove('modal-active')
//     body.classList.remove('body-fixed')
// })
modalCloseButton.addEventListener('click', funcClose)


modalOpen.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close')) {
        funcClose()
    }
})


document.addEventListener('keydown', event => {
    // console.log(event.code) //проверяем какая кнопка нажата через консоль
    if (event.code === 'Escape' && modalOpen.classList.contains('modal--active')) {
        funcClose()
    }
})


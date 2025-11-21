(function() {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        //target.closest делает проверку: есть ли такой класс у элемента, на который кликаем
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }


    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', modalOpen)
    modal.addEventListener('click', modalClose)

    function modalOpen (e) {
        //отмена стандартного поведения
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }
    
    function modalClose(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
})()


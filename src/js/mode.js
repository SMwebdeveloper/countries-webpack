const modeBtn = document.querySelector('.header__dark-mode')
const body = document.querySelector('body')

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})
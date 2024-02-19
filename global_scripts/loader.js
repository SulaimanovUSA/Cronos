const globalContainer = document.querySelector('.global_container')
const loader = document.querySelector('.loader')
const body = document.querySelector('.body')

setTimeout(() => {
    body.classList.remove('bodyActive')
    globalContainer.style.display = "flex"
    loader.style.display = 'none'
}, 2000)
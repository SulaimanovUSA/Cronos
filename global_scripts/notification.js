const notification = document.querySelector('.notification')

function apearNitification() {
    notification.classList.remove('notificationActive')

    setTimeout(() => {
        notification.classList.add('notificationActive')
    }, 3000)
}
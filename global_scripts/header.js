const burgerOpen = document.querySelector('.burger_menu_open');
const burgerMenu = document.querySelector('.burger_menu');
const menuBox = document.querySelectorAll('.menu_box')
const logo = document.querySelector('.header__img')

burgerOpen.addEventListener('click', () => {
    burgerOpen.classList.toggle('burger_menu_openActive');
    burgerMenu.classList.toggle('burger_menuActive');
    logo.classList.toggle('fixed1')
    burgerOpen.classList.toggle('fixed2')
});

menuBox.forEach(item => {
    item.addEventListener('click', () => {
        const boxUnder = item.querySelector('.menu_box_under');

        menuBox.forEach(otherItem => {
            const otherBoxUnder = otherItem.querySelector('.menu_box_under');
            if (otherItem !== item) {
                otherBoxUnder.classList.remove('menu_box_underActive');
            }
        });

        boxUnder.classList.toggle('menu_box_underActive');
    });
});
"use strict"

// Прокрутка при клике

const headerNavlink = document.querySelectorAll('.header__nav-link[data-goto]');
if (headerNavlink.length > 0) {
    headerNavlink.forEach(headerNavlink => {
        headerNavlink.addEventListener("click", onheaderNavlinkClick);
    });

    function onheaderNavlinkClick(e) {
        const headerNavlink = e.target;
        if (headerNavlink.dataset.goto && document.querySelector(headerNavlink.dataset.goto)) {
            const gotoBlock = document.querySelector(headerNavlink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


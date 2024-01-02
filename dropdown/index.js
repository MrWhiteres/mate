'use strict';

const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown__toggle');
const menu = document.querySelector('.dropdown__menu');

// const initialHigh = menu.scrollHeight;
// menu.style.height = '0';

toggleButton.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    dropdown.classList.toggle('dropdown--active')
    // if (dropdown.classList.contains('dropdown--active')) {
    //     dropdown.classList.remove('dropdown--active');
    //     menu.style.height = '0';
    // } else {
    //     menu.style.height = `${initialHigh}px`;
    //     dropdown.classList.add('dropdown--active');
    // }
})
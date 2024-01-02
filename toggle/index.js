'use strict';

const page = document.querySelector('.page');
const themeSwitcher = document.querySelector('.theme-switcher');
const themeName = document.querySelector('.theme-name');

themeSwitcher.addEventListener('click', () => {
    if (page.classList.contains('page--theme--dark')) {
        page.classList.remove('page--theme--dark');
        themeSwitcher.classList.remove('theme-switcher--theme--dark');
        themeName.innerText = 'Theme: Light';
    } else {
        page.classList.add('page--theme--dark');
        themeSwitcher.classList.add('theme-switcher--theme--dark');
        themeName.innerHTML = 'Theme: <strong>Dark</strong>';
    }
})
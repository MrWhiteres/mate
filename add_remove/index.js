'use strict';

const app = document.querySelector('.todo-app');
const list = document.querySelector('.todo-app__list');
const form = document.querySelector('.todo-app__form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    list.insertAdjacentHTML('beforeend', `
    <li>
        ${form.elements.todo.value}
        <button onclick="this.parentElement.remove()">x</button>
    </li>
    `);

    form.reset()
})
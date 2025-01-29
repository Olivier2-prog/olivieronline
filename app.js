const ul = document.querySelector('#menu');
const btn = document.querySelector('.fa-bars');
btn.addEventListener('click', () => {
    ul.classList.toggle('show-menu')
})


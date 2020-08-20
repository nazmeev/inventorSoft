const burgerMenu = document.querySelector(".burger");
const list = document.querySelector('.nav__list');

burgerMenu.addEventListener('click', ({ target }) => {
    target.classList.toggle('open');
    Object.values(list.children).forEach((item) => {
        item.classList.toggle('show-list');
    })
})
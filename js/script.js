'strict';

const mainMenuButton = document.querySelector('.header__menu-button');
const nav = document.querySelector('.navigation');

// Open Mobile Navigation
mainMenuButton.addEventListener('click', function () {
  nav.classList.toggle('navigation--open');
});

'strict';
// Buttons
const mainMenuButton = document.querySelector('.header__menu-button');
const featuresButton = document.querySelector('.navigation__button--features');
const backButton = document.querySelector('.header__back');

// Elements
const nav = document.querySelector('.navigation');
const features = document.querySelector('.navigation__features');

// Open Mobile Navigation
mainMenuButton.addEventListener('click', function () {
  nav.classList.toggle('navigation--open');
});

// Make navigation work, select buttons with class '.navigation__button--sub-menu'
const buttonList = document.querySelectorAll('.navigation__button--sub-menu');

buttonList.forEach(function (i) {
  i.addEventListener('click', function (e) {
    const currentButton = e.target.innerText.toLowerCase();

    el = document.querySelector(`.navigation__${currentButton}`);

    el.classList.toggle(`navigation__${currentButton}--open`);
  });
});

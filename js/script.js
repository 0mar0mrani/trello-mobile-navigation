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

// Open Features
featuresButton.addEventListener('click', function () {
  features.classList.toggle('navigation__features--open');
  backButton.classList.add('header__back--open');
});

// Go back
backButton.addEventListener('click', function () {
  features.classList.remove('navigation__features--open');
});

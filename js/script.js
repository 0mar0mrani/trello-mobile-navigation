'strict';
// Buttons
const mainMenuButton = document.querySelector('.header__menu-button');
const featuresButton = document.querySelector('.navigation__button--features');
const backButton = document.querySelector('.header__back-button');

// Elements
const body = document.querySelector('.body');
const nav = document.querySelector('.navigation');
const features = document.querySelector('.navigation__features');
const headerLogo = document.querySelector('.header__logo-container');
const buttonList = document.querySelectorAll('.navigation__button--sub-menu');

// Open Mobile Navigation
mainMenuButton.addEventListener('click', function () {
  nav.classList.toggle('navigation--open');
  mainMenuButton.classList.toggle('header__menu-button--open');

  // Make body not scrollable
  body.classList.toggle('body--no-scroll');
});

// Allows for clicking in navigation to get to sub menus
buttonList.forEach(function (i) {
  i.addEventListener('click', function (e) {
    const currentButton = e.target.innerText.toLowerCase();

    const el = document.querySelector(`.navigation__${currentButton}`);

    el.classList.add(`navigation__${currentButton}--open`);
    backButton.classList.add('header__back-button--open');
    headerLogo.classList.add('header__logo-container--open');

    // Transition main menu to left
    nav.classList.add('navigation--sub-menu-open');
  });
});

// Go back in mobile navigation
backButton.addEventListener('click', function () {
  for (let i = 0; i < buttonList.length; i++) {
    const currentButton = buttonList[i].innerText.toLowerCase();

    const el = document.querySelector(`.navigation__${currentButton}`);
    el.classList.remove(`navigation__${currentButton}--open`);
  }

  backButton.classList.remove('header__back-button--open');
  headerLogo.classList.remove('header__logo-container--open');

  // Transition main menu to left
  nav.classList.remove('navigation--sub-menu-open');
});
